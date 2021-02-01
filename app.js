//REQUIRE
var express = require('express');

var mongoose = require('mongoose');

//inicializa variables

var app = express();

//conexion a la bae de datos
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (err, res)=> {

if(err) throw err;

console.log('Base de Datos online');


});


//Rutas

app.get('/', (req, res, next)=> {

    res.status(200).json({
        mensaje:true,

        mensaje: 'Peticiones realizada correctamente'
        
    });


});



//ecuchar peticiones

app.listen(3000, () => {

console.log('Express server puerto 3000 online')

})