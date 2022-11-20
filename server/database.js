const mysql = require('mysql')

var db = mysql.createPool({
    connectionLimit: 2,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    timeout: 5000
});

module.exports = db

