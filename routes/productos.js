/*
    Ruta: '/api/usuarios
*/

const { Router } = require('express');

// Controllers
const { getProductos, crearProducto } = require('../controllers/productos');

const router = Router();

// Rutas
router.get('/', getProductos);
router.post('/', crearProducto);

module.exports = router;