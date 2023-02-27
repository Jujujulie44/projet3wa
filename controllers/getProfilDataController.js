import {asyncQuery} from "../config/database.js"
export default async (req, res) => {
    const {user_id} = req.body
    
    const sqlUser = `
    SELECT 
    	users.nom,
        users.prenom,
        users.email,
        roles.name as role
    FROM users 
    JOIN roles 
    ON users.role_id = roles.id 
    WHERE users.id = ?`
    const paramsSql = [user_id]
    
    try{
        // const articles = await asyncQuery(sqlArticle, paramsSql)
        const user = await asyncQuery(sqlUser, paramsSql)
        
        res.json({user})
    }catch(err){
        console.log(err)
        res.sendStatus(500)
    }
    
}