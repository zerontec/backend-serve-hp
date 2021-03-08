var mongoose = require('mongoose');

var Schema = mongoose.Schema;



var usuarioSchema = new Schema({

nombre: {type: String, required: [true, 'El Nombre es Necesario']},
email:  {type: String,unique:true, required: [true, 'El Correo es Necesario']},
password: {type: String, required: [true, 'La contraseña es  necesaria']},
img: {type: String, required:false},
role: {type: String, required: true, default: 'USER_ROLE'}

})


module.exports = mongoose.model('Usuario', usuarioSchema);