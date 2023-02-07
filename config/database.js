import mysql from "mysql";

export let pool  = mysql.createPool({
  connectionLimit : 10000,
    host: "db.3wa.io",// on rentre l'hôte, l'adresse url où se trouve la bdd
    user: "julieandre", // identifiant BDD
    password: "f6cbd8dd01153c93712f7f6027fef399", // le password
    database: "julieandre_ficellesetmessages", // nom de la base de donnée
});

// permet d'obtenir le resultat des requete sql async
export const asyncQuery = async (sql, params = []) => {
    return new Promise((resolve, reject)=>{
        pool.query(sql,params, (error, result)=>{
            if(error){
                return reject(error);
            }
            return resolve(result);
        });
    });
}