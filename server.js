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
app.use(express.urlencoded({ extended:true }));



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

// ******** CRUD USUARIO  **************
// Creación de usuario
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

// Get all usuarios
router.get('/usuarios', (req, res) => {
  Usuario.find().then((data) => res.json(data)).catch((err) => res.json({message: err}))
})

// Get usuario
router.get('/usuario/:id', (req, res) => {
  const {id} = req.params
  Usuario.findById(id).then((data) => res.json(data)).catch((err) => res.json({message: err}))
})

// Update usuario
router.put('/usuario/:id', (req, res) => {
  const {id} = req.params
  const {nombreUsuario, apellidoUsuario, cedulaUsuario, correoUsuario, claveUsuario} = req.body
  Usuario.updateOne({_id: id}, {$set: {nombreUsuario, apellidoUsuario, cedulaUsuario, correoUsuario, claveUsuario}}).then((data) => res.json(data)).catch((err) => res.json({message: err}))
})

// Delete a user
router.delete('/usuario/:id', (req, res) => {
  const {id} = req.params
  Usuario.deleteOne({_id: id}).then((data) => res.json(data)).catch((err) => res.json({message: err}))
})




  // ******* CRUD  INMUEBLE ************
  // crear inmueble
  app.post('/registroInmueble',(req, res)=>{
    const inmueble = Inmobiliario(req.body)
    inmueble.save().then((data) => res.json(data)).catch((err) => res.json({message: err}))
  })
  
   
  //Get all inmueble

router.get('/inmueble', (req, res) => {
  Inmobiliario.find().then((data) => res.json(data)).catch((err) => res.json({message: err}))
})

//Get inmueble
router.get('/usuario/:id', (req, res) => {
  const {id} = req.params
  Inmobiliario.findById(id).then((data) => res.json(data)).catch((err) => res.json({message: err}))
})

// Update inmueble
router.put('/usuario/:id', (req, res) => {
  const {id} = req.params
  const {tipo, ciudad,oferta,habitaciones,precio,imagen} = req.body
  Inmobiliario.updateOne({_id: id}, {$set: {tipo, ciudad,oferta,habitaciones,precio,imagen}}).then((data) => res.json(data)).catch((err) => res.json({message: err}))
})

// Delete inmueble
router.delete('/usuario/:id', (req, res) => {
  const {id} = req.params
  Inmobiliario.deleteOne({_id: id}).then((data) => res.json(data)).catch((err) => res.json({message: err}))
})



  app.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': HTML_CONTENT_TYPE })
 

  createReadStream('./public/home.html').pipe(res)

   
  })
  
   
 

//iniciar el servidor por el puerto
app.use(router);
app.listen(8000);

console.log('la aplicacion esta en linea');

