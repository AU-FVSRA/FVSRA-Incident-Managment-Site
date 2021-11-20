'use strict';
let mysql = require('mysql');

//TEST DATABASE
let connection = mysql.createConnection({
    host: '45.55.136.114',
    user: 'lostfoundF2021',
    password: 'l0stIs0k!',
    database: 'lostfoundF2021'
});

connection.connect(function (err) {
    if (err) throw err;
});

module.exports = connection;
