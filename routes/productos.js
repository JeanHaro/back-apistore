/*
    Ruta: '/api/usuarios
*/

const { Router } = require('express');

// Validación
const { check } = require('express-validator');

// Controllers
const { getProductos, crearProducto } = require('../controllers/productos');

const router = Router();

// Rutas
router.get('/', getProductos);

// Crear producto
router.post('/', [
    check('title', 'El nombre del producto es requerido').not().isEmpty(),
    check('price', 'El precio del producto es requerido').not().isEmpty(),
    check('description', 'La descripción del producto es requerido').not().isEmpty()
], crearProducto);

module.exports = router;