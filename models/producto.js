const { Schema, model } = require('mongoose');

// Esquema del usuario
const ProductoSchema = Schema({
    image: {
        type: String,
    },
    title: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    description: {
        type: String,
        require: true
    }
})

module.exports = model('Producto', ProductoSchema)