var express = require("express");
var app = express();
var student = require("./route/student");

app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/student',student) ;

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});
