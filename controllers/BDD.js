import mysql from "mysql";

class BDD {
    constructor(){
        this.pool = mysql.createPool({
            connectionLimit : 10000,
            host: "db.3wa.io",// l'hôte :  l'adresse url où se trouve la bdd
            user: "julieandre", // identifiant BDD
            password: "f6cbd8dd01153c93712f7f6027fef399", // le password
            database: "julieandre_ficellesetmessages", // nom de la base de donnée
        });
    }
    
    async asyncQuery(sql, params = []){
        return new Promise((resolve, reject)=>{
            this.pool.query(sql,params, (error, elements)=>{
                if(error){
                    return reject(error);
                }
                return resolve(elements);
            });
        });
    }
}

export default BDD