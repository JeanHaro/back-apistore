/*
    Ruta: '/api/usuarios
*/

const { Router } = require('express');

// Controllers
const { getUsuarios } = require('../controllers/usuarios');

const router = Router();

// Rutas
router.get('/', getUsuarios);

module.exports = router;