import {pool} from "../config/database.js"

export default (req, res) => {
    const {panier_id} = req.body
    console.log(panier_id)
    const sql = "DELETE FROM products_panier WHERE panier_id = ?"
    const paramsSQL = [panier_id]
    pool.query(sql,paramsSQL,(err, result) => {
        if(err) throw err
        res.json({result})
    })
}