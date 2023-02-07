import {asyncQuery} from "../config/database.js"
export default async (req, res) => {
    const {id} = req.body
    // affichier le titre, contente 
    // affichier le nom de l'auteur
    const sqlArticle = `
        SELECT 
            products.title, 
            products.descriptif, 
            users.nom 
        FROM products 
        JOIN users 
        ON users.id = products.user_id 
        WHERE products.id = ?`
    const paramsSQLArticle = [id]

    // // affiche les different com lier a l'article
    // const sqlCommentaire = `
    //     SELECT 
    //         contente 
    //     FROM commentaires 
    //     WHERE article_id = ?
    // `
    // const paramsSQLCommentaire = [id]

    // try{
    //     const articleList = await asyncQuery(sqlArticle,paramsSQLArticle)
    //     const commentairesList = await asyncQuery(sqlCommentaire,paramsSQLCommentaire)
    //     res.json({result:articleList,resultCom:commentairesList})
    // } catch(err) {
    //     console.log(err)
    //     res.sendStatus(500)
    // }

    // /* pool.query(sqlArticle,paramsSQLArticle,(err, result) => {
    //     if(err) throw err
    //     pool.query(sqlCommentaire,paramsSQLCommentaire,(error, resultCom) => {
    //         if(error) throw error
    //         res.json({result,resultCom})
    //     })
    // }) */
}
