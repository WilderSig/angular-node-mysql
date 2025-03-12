const errorHandler = (err, req, res, next) => {
    console.error(err.stack); //mopstrar en consola

    res.status(err.status || 500).json({
        error: {
            message: err.message || 'Error interno del servidor',
            status: err.status || 500,
        },
    });
};

module.exports = errorHandler;
