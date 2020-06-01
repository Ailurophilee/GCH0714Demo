const express = require('express');
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

// define routes here..
app.get('/', function (req, res) {
    res.send('<html><body><h1>Hello World</h1></body></html>');
});
app.get('/login', function (req, res) {
    res.sendFile(__dirname + '/login.html');
});

app.post('/doLogin',(req,res)=>{
    let name = req.body.txtName;
    let password = req.body.txtPassword;
    if(password =='123@'){
        res.end('Login Ok');
    }else{
        res.end('Login failed!');
    }
})


var server = app.listen(2500, function () {
    console.log('Node server is running..');
});
