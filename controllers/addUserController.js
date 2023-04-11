import {asyncQuery} from "../config/database.js"
import bcrypt from 'bcrypt'

const emailExist  = async (email) => {
    const sql = "SELECT * FROM users WHERE email = ?"
    const response  = await asyncQuery(sql,[email])
    if(response.length > 0) return true
    return false
} 



export default async (req, res) => {
        const saltRounds = 10
        const sqlPanier = "INSERT INTO panier (user_id) VALUES (?)"
        const sql = "INSERT INTO users (nom, prenom, email, password, role_id) VALUES (?,?,?,?,1)"
        const {nom, prenom, email, password} = req.body
        
        if(password.length <= 8){
            return res.json({response:'mdp trop court'})
        }
        
        
        try {
            // on verrifie si l'email existe en BDD
            const emailPresent = await emailExist(email)
        
            // error a la verrification de l'email
            if(emailPresent === undefined){
                return res.json({error:'undefined'})
            }
            
            // Email deja present en BDD 
            if(emailPresent === true) {
                return res.json({response:'cet email existe déjà'})
            }
            
            // On hash le password
            const mpdHash = await bcrypt.hash(password,saltRounds)
            
            // on créé la liste des params pour add user
            const paramsSql = [nom, prenom, email, mpdHash]
            
            // on fait la requete
            const createUser = await asyncQuery(sql,paramsSql)
            const createPanier = await asyncQuery(sqlPanier, [createUser.insertId])
            
            // on retourne la reponse
            return res.json({response:createPanier})
        }catch(err){
            console.log(err)
            return res.json({error:err})
        }
        
    }