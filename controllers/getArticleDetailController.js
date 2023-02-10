import {asyncQuery} from "../config/database.js"
import {pool} from "../config/database.js"

export default async (req, res) => {
    const {id} = req.body
    // affichier le titre, la description et le prix 
    // affichier le nom de l'auteur
    const sqlArticle = `
        SELECT 
            products.title, 
            products.descriptif,
            products.prix,
            users.nom 
        FROM products 
        JOIN users 
        ON users.id = products.user_id 
        WHERE products.id = ?`
    const paramsSQLArticle = [id]

     try{
         const articleList = await asyncQuery(sqlArticle,paramsSQLArticle)
         res.json({result:articleList})
     } catch(err) {
         console.log(err)
         res.sendStatus(500)
     }

}
