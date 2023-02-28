import {pool} from "../config/database.js"

export default (req, res) => {
    const sql = `
        SELECT 
            products.*,
            pictures.url 
            products.title,
            products.descriptif,
            products.prix,
            
        FROM products 
        JOIN pictures 
        ON products.id = pictures.product_id`
    
    pool.query(sql,(err, result) => {
        console.log(result)
        if(err) throw err
        res.json({result})
    })
}