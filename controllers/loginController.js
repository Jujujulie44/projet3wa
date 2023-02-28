import {asyncQuery} from "../config/database.js"
import bcrypt from "bcrypt"
import {generateToken} from "../config/token.js"


const generateResponse = async (userDataSQL) => {
    // ID du role Admin en BDD
    const ADMIN_ROLE_ID = 2
    // verrifie si le user est admin return true OR false
    const admin = userDataSQL.role_id === ADMIN_ROLE_ID
    
    const userData = { 
        id:userDataSQL.id,
        nom:userDataSQL.nom,
        prenom:userDataSQL.prenom,
        email:userDataSQL.email,
        
        user:true,
        admin
    }
    try {
        const token = await generateToken(userData)
        return {response:true, admin, token, username : userData.email} // utilise l'adresse email comme username
    } catch(err){
        console.log(err)
        return
    }
}

export default async (req, res) => {
    const {password, email} = req.body
    const sql = "SELECT * FROM users WHERE email = ?"
    const paramsSql = [email]

    const result = await asyncQuery(sql, paramsSql)
    if(!result){
        res.status(401).json({error: "Identifiant ou mdp non valide"})
    }
    
    try {
        const response = await generateResponse(result[0])
        const resultCompare = await bcrypt.compare(password, result[0].password)
        res.json(resultCompare ? {response} : {response:null})
    } catch(err){
        console.log(err)
        res.status(500).json({error: "Identifiant ou mdp non valide"})
    }
}