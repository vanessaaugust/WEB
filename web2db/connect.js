var mysql = require('mysql')

var con = mysql.createconnection({
    host: "localhost",
    user: "root"
    password: "v4nessa,"
});

con.connect(function(err){
    if (err) throw err;
    console.log("connected!");
});