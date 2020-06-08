const express = require('express')  ;
const engines = require('consolidate');
const app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.engine('hbs',engines.handlebars);
app.set('views','./views');
app.set('view engine','hbs')

var indexControler = require('./index.js');
app.use('/index',indexControler);

var server = app.listen(3456,function(){
    console.log('Node server is running');
})