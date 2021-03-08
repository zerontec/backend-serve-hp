
//Requires
var express = require('express');
var mongoose = require('mongoose');



//Inicializar Variables
var app = express();


//Rutas



app.get('/', (req, res, next)=> {

    res.status(200).json({
        mensaje:true,

        mensaje: 'Peticiones realizada correctamente'
        
    });


});

module.exports = app;