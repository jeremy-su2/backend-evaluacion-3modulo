const mongoose = require('mongoose');
const { Schema } = mongoose;

const Crearusuario = new Schema({
    nombre:String,
    apellido:String,
    rut: { type:String,default: null },
    correo: String,
    password: String,
});

// preguntar por obtener usuarios 
const Obtenerusuario = new Schema({
    usuario: { Crearusuario }
});

module.exports = mongoose.model('Crearusuario',Crearusuario, 'Obtenerusuario',Obtenerusuario);