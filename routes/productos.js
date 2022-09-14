/*
    Ruta: '/api/usuarios
*/

const { Router } = require('express');

// Validación
const { check } = require('express-validator');

// Middlewares
const { validarCampos } = require('../middlewares/validar-campos');

// Controllers
const { getProductos, crearProducto, actualizarProducto, borrarProducto } = require('../controllers/productos');

const router = Router();

// Rutas
router.get('/', getProductos);

// Crear producto
router.post('/', [
    check('title', 'El nombre del producto es requerido').not().isEmpty(),
    check('price', 'El precio del producto es requerido').not().isEmpty(),
    check('description', 'La descripción del producto es requerido').not().isEmpty(),
    validarCampos
], crearProducto);

// Actualizar producto
router.put('/:id', [
    check('title', 'El nombre del producto es requerido').not().isEmpty(),
    check('price', 'El precio del producto es requerido').not().isEmpty(),
    check('description', 'La descripción del producto es requerido').not().isEmpty()
], actualizarProducto);

// Eliminar producto
router.delete('/:id', borrarProducto);

module.exports = router;