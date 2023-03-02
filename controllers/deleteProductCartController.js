import {pool} from "../config/database.js"

export default (req, res) => {
    const {panier_id, product_id} = req.body
    const sql = "DELETE FROM products_panier WHERE panier_id = ? AND product_id = ?"
    const paramsSQL = [panier_id, product_id]
    pool.query(sql,paramsSQL,(err, result) => {
        if(err) throw err
        res.json({result})
    })
}