const getUsuarios = (request, response) => {
    response.status(400).json({
        ok: true,
        usuarios: []
    })
}

module.exports = {
    getUsuarios
}