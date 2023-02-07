import {pool} from "../config/database.js"

export default (req, res) => {
    const sql = "INSERT INTO products (title, descriptif, prix) VALUES (?,?,?)"
    const {title, descriptif, prix} = req.body
    const paramsSql = [title, descriptif, prix]
    pool.query(sql,paramsSql,(err, result) => {
        
        if(err) throw err
        res.json({result})
        console.log(result)
    })
}