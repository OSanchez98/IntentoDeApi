var express = require('express');
var app = express();

app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.send('hola');
});

app.listen(3000, function() {
    console.log('Escuchando en el puerto 3000');
});