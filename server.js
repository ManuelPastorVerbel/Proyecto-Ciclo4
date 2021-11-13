const express =require('express');
const db = require('./modulos/conexion.js');
const router = express.Router();
const Usuario = require('./modulos/usuario.js');
const Zona = require('./modulos/zona.js');
const Inmobiliario = require('./modulos/inmobilario');
const mongoose= require('mongoose');
var app = express();
// conexion a base de datos 

db("mongodb+srv://Prog_Web:Dcbp92BIcaU4906b@clusterprogweb.ftogg.mongodb.net/Inmobiliaria?retryWrites=true&w=majority");

//inicialización de app
app.use(router);
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use('/app',express.static('public'));

app.get('/',function(req,res){
    res.send('hello world')
   console.log('hola estas en servidor');
});
app.post('/app',express.urlencoded({ extended:true }),  (req, res)=>{
    console.log(req.body);
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
   },function( err ){
       console.log(String(err));
       res.send("no se pudo guardar informacion");
   });
});


app.listen(3000);

console.log('la aplicacion esta en linea');
