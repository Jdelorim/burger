var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "burger_db"
});

connection.connect(function(err){
    if(err) {
        console.log("error connectin mysql", err.stack);
        return;
    }
    console.log("connecgted as id", connection.threadId);
});
module.exports = connection;