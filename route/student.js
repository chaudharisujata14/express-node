var express = require("express");
var app = express();
var connected= require("../db");
var createResult = require("../ultis");
app.use(express.json());

app.get('/', (req, res) => {
    const connection = connected.connected();
    var result = {};
    statement = `select * from student`;
    connection.query(statement,(error,data) => {
        connection.end();
       result = createResult.createResult(error,data);
       res.send(result);
    });
});

app.post('/', (req, res) => {
    const {name,marks}=req.body;
    const connection = connected.connected();
    var result = {};
    statement = `insert into student(name,marks) value('${name}',${marks})`;
    connection.query(statement,(error,data) => {
        connection.end();
       result = createResult.createResult(error,data);
       res.send(result);
    });
});

app.put('/:rollno', (req, res) => {
    const rollno = req.param.rollno;
    const {name,marks}=req.body;
    const connection = connected.connected();
    var result = {};
    statement = `update student set name = '${name}',marks = ${marks} where rollno = ${rollno}`;
    connection.query(statement,(error,data) => {
        connection.end();
       result = createResult.createResult(error,data);
       res.send(result);
    });
});

app.delete('/:rollno', (req, res) => {
    const rollno = req.param.rollno;
    const connection = connected.connected();
    var result = {};
    statement = `delete from student where rollno = ${rollno}`;
    connection.query(statement,(error,data) => {
        connection.end();
       result = createResult.createResult(error,data);
       res.send(result);
    });
});

module.exports = app;