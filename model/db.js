'use strict';
let mysql = require('mysql');

//TEST DATABASE
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'fvsr-test-db'
});

connection.connect(function (err) {
    if (err) throw err;
});

module.exports = connection;
