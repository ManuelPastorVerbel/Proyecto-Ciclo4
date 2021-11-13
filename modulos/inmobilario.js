const mongoose= require('mongoose');
var Inmobiliario = new mongoose.Schema({
    tipo:{
        type:String

    },
    ciudad:{
        type:String
    },
    oferta:{
        type:String
    },
    habitaciones:{
        type:Number
    },
    precio:{
        type:Number
    },
    imagen:{
        type:String
    },
});

var Inmobiliario=mongoose.model('Inmobiliario',Inmobiliario,'Inmobiliarios');
module.exports=Inmobiliario;
