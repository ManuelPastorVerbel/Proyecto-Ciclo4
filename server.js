const express =require('express');
const bodyParser = require("body-parser");
const router = express.Router();
const Usuario = require('./modulos/usuario.js');
const mongoose= require('mongoose');
var app = express();
mongoose.connect("mongodb+srv://Prog_Web:Dcbp92BIcaU4906b@clusterprogweb.ftogg.mongodb.net/Inmobiliaria?retryWrites=true&w=majority");
app.use(router);
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use('/',express.static('public'));

app.get('/',function(req,res){
   console.log('hola estas en servidor');
});
app.post('/',express.urlencoded({ extended:true }),  (req, res)=>{
   var usuario= new Usuario({
    nombreUsuario:req.body.nombre,
    apellidoUsuario:req.body.apellido,
    cedulaUsuario:req.body.cedula,
    correoUsuario:req.body.correo,
    celularUsuario:req.body.celular,
    claveUsuario:req.body.password

   });
   usuario.save().then(function( ){
       res.redirect('/'); 
   },function(err){
       console.log(String(err));
       res.send('no pudimos guardar la información');
   });
});


app.listen(3000);

console.log('la aplicacion esta en linea');
