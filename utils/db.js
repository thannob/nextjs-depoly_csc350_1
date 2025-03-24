const mysql = require('mysql2')
export const mysqlPool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: '5790065_csc350'
})