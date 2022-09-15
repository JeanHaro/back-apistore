// Modelo
const Producto = require('../models/producto');

// Obtener productos
const getProductos = async (request, response) => {
    // Obtener todos los productos
    const productos = await Producto.find({}, 'title price description image');

    response.json({
        ok: true,
        productos
    })
}

// Obtener un producto
const getProducto = async (request, response) => {
    const uid = request.params.id;

    try {
        const productoDB = await Producto.findById(uid);

        if (!productoDB) {
            return response.status(404).json({
                ok: false,
                msg: 'No se encuentra el producto por ese id'
            })
        }

        response.json({
            ok: true,
            productoDB
        })
    } catch (error) {
        console.log(error);
        // 500 - error interno
        response.status(500).json({
            ok: false,
            msg: 'Error inesperado...'
        })
    }
}

// Crear producto
const crearProducto = async (request, response) => {
    // console.log(request.body);
    // Traemos los valores
    const { title } = request.body;

    try {
        // Busca un titulo con el mismo nombre y te manda un valor boolean
        const existeNombre = await Producto.findOne({ title });

        // Si existe nuevamente el nombre del producto
        if (existeNombre) {
            return response.status(400).json({
                ok: false,
                msg: 'El nombre del producto ya está registrado'
            })
        }

        // Instancia de la clase
        const producto = new Producto(request.body);
        // Grabar en la base de datos
        await producto.save();

        response.json({
            ok: true,
            producto
        })
    } catch (error) {
        console.log(error);
        // 500 - error interno
        response.status(500).json({
            ok: false,
            msg: 'Error inesperado... revisar logs'
        })
    }
}

// Actualizar producto
const actualizarProducto = async (request, response) => {
    const uid = request.params.id;

    try {
        const productoDB = await Producto.findById(uid);
        
        // Si no lo encuentra
        if (!productoDB) {
            return response.status(404).json({
                ok: false,
                msg: 'No existe un producto por ese id'
            })
        }

        const { title, ...campos } = request.body;

        // Si el nombre del producto es distinto al que tiene 
        if (productoDB.title !== title) {
            const existeNombre = await Producto.findOne({
                title: request.body.title
            })

            // Si existe el nombre
            if (existeNombre) {
                return response.status(400).json({
                    ok: false,
                    msg: 'Ya existe ese nombre del producto'
                })
            }
        }

        // Nombre del producto que quiero actualizar
        campos.title = title;
        
        // new: true - para indicar que siempre regrese el nuevo
        const productoActualizado = await Producto.findByIdAndUpdate(uid, campos, { new: true });

        response.json({
            ok: true,
            productoActualizado
        })
    } catch (error) {
        console.log(error);

        response.status(500).json({
            ok: false,
            msg: 'Error inesperado'
        })
    }
}

// Eliminar producto
const borrarProducto = async (request, response) => {
    const uid = request.params.id;

    try {
        // Buscar el id
        const productoDB = await Producto.findById(uid);

        // Si no encuentra el usuario
        if (!productoDB) {
            return response.status(404).json({
                ok: false,
                msg: 'No existe un usuario por ese id'
            })
        }

        await Producto.findByIdAndDelete(uid);

        response.json({
            ok: true,
            umsg: 'Usuario eliminado'
        })
    } catch (error) {
        console.log(error);
        
        response.status(500).json({
            ok: false,
            msg: 'Hable con el admin'
        })
    }
}

module.exports = {
    getProductos,
    getProducto,
    crearProducto,
    actualizarProducto,
    borrarProducto
}