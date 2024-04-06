const sqlite = require('sqlite3').verbose();
const path = require('path');

const dao = {
    cargar(table, data){
        const db = new sqlite.Database(path.resolve(__dirname, path.resolve(__dirname, '../db/database.db')), sqlite.OPEN_READWRITE, (err) => {if(err) return console.error(err)});

        let keys = Object.keys(data).join(', ');
        let values = Object.values(data).join(', ');

        let sql = `INSERT INTO ${table} (${keys}) VALUES (${values})`;
        return new Promise((resolve, reject) => {
            db.run(sql, [], (err) => {
                if(err) reject(err);
                
                setTimeout(() => {
                    resolve(true);
                }, 10);
            });
            
            db.close();
        })
    },


    modificar(table, data, idColumnName, id){
        const db = new sqlite.Database(path.resolve(__dirname, '../db/database.db'), sqlite.OPEN_READWRITE, (err) => {if(err) return console.error(err)});

        let keyValues = Object.entries(data).map(e => e.join(' = ')).join(', ')

        let sql = `UPDATE ${table} SET ${keyValues} WHERE ${idColumnName} = ${id}`;
        return new Promise((resolve, reject) => {
            db.run(sql, [], (err) => {
                if(err) reject(err);
                
                setTimeout(() => {
                    resolve(true);
                }, 10);
            });
            
            db.close();
        })
    },


    eliminar(table, idColumnName, id){
        const db = new sqlite.Database(path.resolve(__dirname, '../db/database.db'), sqlite.OPEN_READWRITE, (err) => {if(err) return console.error(err)});

        let sql = `DELETE FROM ${table} WHERE ${idColumnName} = ${id}`;
        return new Promise((resolve, reject) => {
            db.run(sql, [], (err) => {
                if(err) reject(err);
                
                setTimeout(() => {
                    resolve(true);
                }, 10);
            });
            
            db.close();
        });
    },


    buscar(table, idColumnName, id){
        const db = new sqlite.Database(path.resolve(__dirname, '../db/database.db'), sqlite.OPEN_READWRITE, (err) => {if(err) return console.error(err)});

        let sql = `SELECT * FROM ${table} WHERE ${idColumnName} = ${id}`;
        return new Promise((resolve, reject) => {

            db.get(sql, [], (err, row) => {
                if(err) reject(err);
                                
                setTimeout(() => {
                    resolve(row);
                }, 10);
            });

            db.close();
        })
    },


    buscarTodo(table){
        const db = new sqlite.Database(path.resolve(__dirname, '../db/database.db'), sqlite.OPEN_READWRITE, (err) => {if(err) return console.error(err)});
        
        let sql = `SELECT * FROM ${table}`;
        return new Promise((resolve, reject) => {

            db.all(sql, [], (err, rows) => {
                if (err) reject(err); 

                setTimeout(() => {
                    resolve(rows);
                }, 10);
            });

            db.close();
        })
    }
}
module.exports = dao