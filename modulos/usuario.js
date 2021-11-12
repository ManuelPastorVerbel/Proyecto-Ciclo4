const mongoose= require('mongoose');

let Usuario = new mongoose.Schema({
    nombreUsuario:{
        type: String,
        required: true,
        maxLength: 100
    },

    apellidoUsuario:{
        type: String,
        required: true,
        maxLength: 100
    } ,
    cedulaUsuario:{
        type: String,
        required: true,
        maxLength: 50
    } ,

    correoUsuario:{
        type: String,
        required: true,
        maxLength: 50
    },

    celularUsuario:{
        type: String,
        required: true,
        maxLength: 50
    },

    claveUsusario:{
        type: String,
        required: true,
        maxLength: 20
    },
 });

var usuario =mongoose.model('Usuario',Usuario,'Usuarios');
 module.exports= usuario;