const Crearusuario = require('./usuario.model');

const crearUsuarioDB = async (crearusuario) => {
    let respuesta = await Crearusuario.create(crearusuario);
    return respuesta;
}

const obtenerUsuarioDB = async () => {
    let respuesta = await RegistroForm.find();
    return respuesta;
}



module.exports = {
    crearUsuarioDB,
    obtenerUsuarioDB,
    
}