/*
    Ruta: '/api/usuarios
*/

const { Router } = require('express');

// Validación
const { check } = require('express-validator');

// Middlewares
const { validarCampos } = require('../middlewares/validar-campos');

// Controllers
const { 
    getProductos, 
    crearProducto, 
    actualizarProducto, 
    borrarProducto, 
    getProducto
} = require('../controllers/productos');

const router = Router();

// Rutas
// Obtener todos los productos
router.get('/', getProductos);

// Obtener un solo producto
router.get('/:id',  getProducto);

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
    check('description', 'La descripción del producto es requerido').not().isEmpty(),
    validarCampos
], actualizarProducto);

// Eliminar producto
router.delete('/:id', borrarProducto);

module.exports = router;