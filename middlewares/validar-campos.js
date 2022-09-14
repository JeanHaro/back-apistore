const { validationResult } = require('express-validator');

const validarCampos = (request, response, next) => {
    const errores = validationResult(request);

    // Si el campo de errores no está vacío
    if (!errores.isEmpty()) {
        return response.status(400).json({
            ok: false,
            errors: errores.mapped()
        })
    }

    next();
}

module.exports = {
    validarCampos
}