var mysql = require('mysql');

var conn = mysql.createConnection({
    host: 'localhost',
    user: 'admin',
    password: 'admin',
    database:'penilaian'
});

conn.connect(function(err){
    if (err) throw err;
});

module.exports = conn;