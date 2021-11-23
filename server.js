//importamos los módulos
const express =require('express');
const {createReadStream} = require('fs');
const path = require('path');
const funciones= require('./modulos/funciones');
var bodyParser = require('body-parser')
 


//modulo de conexion 
const db = require('./modulos/conexion.js');

//router 
var router = express.Router();

// cabecera HTML



const HTML_CONTENT_TYPE = 'text/html'
//modulos de la aplicación 

const Usuario = require('./modulos/usuario.js');
var Zona = require('./modulos/zona.js');
var Inmobiliario = require('./modulos/inmobilario');

// conexion a base de datos 

db("mongodb+srv://Prog_Web:Dcbp92BIcaU4906b@clusterprogweb.ftogg.mongodb.net/Inmobiliaria?retryWrites=true&w=majority");

//creamos una instancia de express

var app = express();

app.use(router);
// middleware para proceso de data
var jsonParser = bodyParser.json();
app.use(express.json());
app.use(express.urlencoded({ extended:false }));



//servir paginas html
app.use(express.static(path.join(__dirname, '/public')));

//rutas

/*router.get("/", (req, res) => {
 res.sendFile('home.html', {root: './public'});
  
 });*/
 app.get("/registro", (req, res) => {
  res.sendFile('registro.html',{root: './public'});
 });
 app.get("/registroInmueble", (req, res) => {
  res.sendFile('registroInmueble.html',{root: './public'});
 });
// middleware para procesar el formulario de Usuario

app.post('/registro',(req, res)=>{
  const usuario = Usuario(req.body)
  usuario.save().then((data) => res.json(data)).catch((err) => res.json({message: err}))

  /*var myobj = { nombreUsuario:req.body.nombreUsuario, apellidoUsuario:req.body.apellidoUsuario, cedulaUsuario:req.body.cedulaUsuario, correoUsuario:req.body.correoUsuario, claveUsuario:req.body.claveUsuario };
  Usuario.collection.insertOne(myobj, function(err, res) {
    if (err) throw err;
  
    });
    res.send("respuesta del servidor");
    res.redirect('/home.html');*/
  })
  
    
  app.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': HTML_CONTENT_TYPE })
 

  createReadStream('./public/home.html').pipe(res)

   
  })
  
   
 

//iniciar el servidor por el puerto
app.use(router);
app.listen(8000);

console.log('la aplicacion esta en linea');

