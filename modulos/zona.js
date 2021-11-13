const mongoose= require('mongoose');

var Zona= new mongoose.Schema({
    ubicacion:{type:String, 
        required:true},
});
var Zona=mongoose.model('Zona',Zona,'Zonas');
module.exports=Zona;