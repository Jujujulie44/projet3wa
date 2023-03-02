import {pool} from "../config/database.js"

export default (req, res) => {
    const {title, descriptif, prix, id} = req.body
    console.log({title, descriptif, prix, id})
    const sql = "UPDATE products SET title = ?, descriptif = ?, prix = ? WHERE id = ?"
    const paramsSQL = [title, descriptif, prix, id]
    pool.query(sql,paramsSQL,(err, result) => {
        if(err) throw err
        res.json({result})
    })
}