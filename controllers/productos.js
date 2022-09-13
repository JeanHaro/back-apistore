// Modelo
const Producto = require('../models/producto');

const getProductos = (request, response) => {
    response.json({
        ok: true,
        msg: 'Get Productos'
    })
}

const crearProducto = async (request, response) => {
    // console.log(request.body);
    // Traemos los valores
    const { title, price, description } = request.body;

    // Instancia de la clase
    const producto = new Producto(request.body);

    // Grabar en la base de datos
    await producto.save();

    response.json({
        ok: true,
        producto
    })
}

module.exports = {
    getProductos,
    crearProducto
}