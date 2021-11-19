const mongoose= require('mongoose');
const { ObjectId } = require('bson')
var Usuario = new mongoose.Schema({
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

    claveUsuario:{
        type: String,
        required: true,
        maxLength: 20
    },
 });

const usuario =mongoose.model('Usuario',Usuario,'Usuarios');
 module.exports= usuario;