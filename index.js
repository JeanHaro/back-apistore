// Express
const express = require('express');

// Variables de entorno
require('dotenv').config();

// CORS
const cors = require('cors');

// Conectar a la BD
const { dbConnection } = require('./database/config');

// Creando e inicializando el servidor
const app = express();

// Configurar CORS
app.use(cors());

// Lectura y parseo del body
app.use(express.json());

// Conectar a la base de datos
dbConnection();

// Rutas
app.use('/api/productos', require('./routes/productos'));

// Levantamos el servidor
app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en puerto ' + process.env.PORT);
});