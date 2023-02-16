import {asyncQuery} from "../config/database.js"

export default async (req, res) => {
    const {title, descriptif, prix, files} = req.body
    
    const sql = "INSERT INTO products (title, descriptif, prix) VALUES (?,?,?)"
    const sqlPictures = "INSERT INTO pictures (product_id, url, caption) VALUES (?,?,?)"
    
    const paramsSql = [title, descriptif, prix]
    
    const product = await asyncQuery(sql,paramsSql)
    
    const paramsSqlPicture = [product.insertId,files,title]
    
    const pictures = await asyncQuery(sqlPictures,paramsSqlPicture)
    res.json({product,pictures})
    
}

// pictures product_id url caption