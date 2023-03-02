import {pool} from "../config/database.js";

export default (req, res) => {
    
    const {product_id, panier_id} = req.body;  
    const paramSql = [product_id, panier_id];
    
    let sql = "INSERT INTO products_panier (product_id, panier_id) VALUES (?, ?)";
    pool.query(sql, paramSql, (err, result) => {
        if (err) throw err;
        res.json({result});
    });
};