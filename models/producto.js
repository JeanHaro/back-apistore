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

ProductoSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();

    object.uid = _id;

    return object;
})

module.exports = model('Producto', ProductoSchema)