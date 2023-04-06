import {pool} from "../config/database.js"

export default (req, res) => {
    
    const sql = `
        SELECT 
            products.id,
            products.title,
            products.descriptif,
            products.prix,
            pictures.url 
        FROM products 
        JOIN pictures 
        ON products.id = pictures.product_id`
    
    pool.query(sql,(err, result) => {
        console.log(result)
        if(err) throw err
        res.json({result})
    })
}