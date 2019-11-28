var express = require("express");
var app = express();
var student = require("./route/student");

app.use(express.json());
app.use('/student',student) ;

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});