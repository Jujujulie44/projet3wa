import {pool} from "../config/database.js"

export default (req, res) => {
    const {files, product_id} = req.body
    console.log(req.body)
    const sql = "UPDATE pictures SET url = ? WHERE product_id = ? "
    const paramsSQL = [files, product_id]
    pool.query (sql, paramsSQL,(err, result) => {
        if (err) throw err
        res.json ({result})
    })
}