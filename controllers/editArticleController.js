import {pool} from "../config/database.js"

export default (req, res) => {
    const {id, title, descriptif, prix } = req.body
    const sql = "UPDATE products SET title = ?, descriptif = ?, prix = ? WHERE id = ?"
    const paramsSQL = [id,title, descriptif, prix]
    pool.query(sql,paramsSQL,(err, result) => {
        if(err) throw err
        res.json({result})
    })
}