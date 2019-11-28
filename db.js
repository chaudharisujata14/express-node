const mysql = require("mysql");

function connected() {

var connection = mysql.createConnection({
    "host" : "localhost",
    "user" : "dac",
    "password" : "dac",
    "database" : "Staff",
    "port" : 3306
    });
    connection.connect();
    return connection;
}

module.exports = {connected : connected};