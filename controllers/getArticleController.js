import {pool} from "../config/database.js"

export default (req, res) => {
    const sql = "SELECT id, title, descriptif, prix FROM products"
    
    pool.query(sql,(err, result) => {
        
        if(err) throw err
        res.json({result})
    })
}