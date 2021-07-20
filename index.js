//inicio de declaraciones y instancias
const express = require('express');
var cors = require('cors');
var router = express.Router();
var bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const port = process.env.PUERTO;
//fin de declaraciones y instancias

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//inicio ruta de los servicios
router.get('/', (req, res) => {
  res.send('HOLA MUNDO VAMOS POR EL 7')
});
//fin de las rutas de los servicios

//coneccion db mongoose
mongoose.connect(process.env.SERVER, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
console.log("conectado a la DB")
});
//fin de coneccion db mongoose

// agregando el prefijo para identificar nuestro backend
app.use('/backend-2campos', router);

app.listen(port, () => {
  console.log(`La sigiente ruta http://localhost:${port} es la del servidor`)
});