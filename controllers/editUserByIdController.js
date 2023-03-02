import {pool} from "../config/database.js"

export default (req, res) => {
    const {nom, prenom, email, id} = req.body
    console.log({nom, prenom, email, id})
    const sql = "UPDATE users SET nom = ?, prenom = ?, email = ? WHERE id = ?"
    const paramsSQL = [nom, prenom, email, id]
    pool.query(sql,paramsSQL,(err, result) => {
        if(err) throw err
        res.json({result})
    })
}