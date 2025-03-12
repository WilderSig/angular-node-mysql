const app = require('./src/app');
const db = require('./src/models'); // Importa los modelos con la relación

const PORT = process.env.PORT || 3000;



// Conectar con la base de datos y sincronizar modelos
db.sequelize.sync({ force: false }).then(() => {
    console.log('Base de datos conectada y sincronizada.');
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
}).catch((error) => {
    console.error('Error al conectar la base de datos:', error);
});
