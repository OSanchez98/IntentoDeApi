var express = require('express');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var path = require('path');

var app = express();

app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.send('hola');
});

app.listen(3000, function() {
    console.log('Escuchando en el puerto 3000');
});