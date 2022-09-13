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
app.use(cors())

// Conectar a la base de datos
dbConnection();

// Rutas
app.get('/', (request, response) => {
    response.status(400).json({
        // Todo lo hizo correcto
        ok: true,
        // Mensaje de respuesta
        msg: 'Hola mundo'
    })
})

// Levantamos el servidor
app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en puerto ' + process.env.PORT);
});