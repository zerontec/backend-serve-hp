//REQUIRE
var express = require('express');

var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//inicializa variables

var app = express();


/* Body Parser */

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


//conexion a la bae de datos
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (err, res)=> {

if(err) throw err;

console.log('Base de Datos online');


});

//importar rutas 


var appRoutes = require('./routes/app');
var usuarioRoutes = require('./routes/usuario');
var loginRoutes = require('./routes/login');


//Rutas

app.use('/usuario', usuarioRoutes);
app.use('/login', loginRoutes);
app.use('/', appRoutes);



//ecuchar peticiones

app.listen(3000, () => {

console.log('Express server puerto 3000 online')

})