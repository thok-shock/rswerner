const mysql = require('mysql')

var db = mysql.createPool({
    connectionLimit: 2,
    host: 'rswerner.com',
    user: 'system',
    password: process.env.password,
    database: 'rswerner',
    timeout: 10000
});

module.exports = db

