//importamos los módulos
const express =require('express');
const querystring = require('querystring');
const {createReadStream} = require('fs')
const path = require('path');
const funciones= require('./modulos/funciones')
dataString = ''
//modulo de conexion 
const db = require('./modulos/conexion.js');

//router 
const router = express.Router();

const Usuario = require('./modulos/usuario.js');
const Zona = require('./modulos/zona.js');
const Inmobiliario = require('./modulos/inmobilario');
//const mongoose= require('mongoose');
// conexion a base de datos 

db("mongodb+srv://Prog_Web:Dcbp92BIcaU4906b@clusterprogweb.ftogg.mongodb.net/Inmobiliaria?retryWrites=true&w=majority");

//creamos una instancia de express

var app = express();

app.use(router);
// middleware para proceso de data

app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use('/registro',express.static('/public'));

//rutas

router.get("/", (req, res) => {
  res.sendFile('home.html', {root: './public'});
 });
 router.get("/registro", (req, res) => {
  res.sendFile('RegistroUsuario.html',{root: './public'});
 });
// middleware para procesar el formulario

router.post('/registro', (req, res)=>{
 var usuario= {
    nombreUsuario:req.body.nombreUsuario,
    apellidoUsuario:req.body.apellidoUsuario,
    cedulaUsuario:req.body.cedulaUsuario,
    correoUsuario:req.body.correoUsuario,
    celularUsuario:req.body.celularUsuario,
    claveUsuario:req.body.claveUsuario
  }; 
 /* Usuario.create(req.body.post ,(err,usuario)=>{
    res.redirect('/');
  });*/
  Usuario.collection.insertOne(usuario, function(err, res) {
    if (err) throw err;
  
    });
    res.send("respuesta del servidor")
  })
    
 
   
   
 

//iniciar el servidor por el puerto
app.use(router);
app.listen(3000);

console.log('la aplicacion esta en linea');

