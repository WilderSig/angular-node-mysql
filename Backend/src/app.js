const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
const errorHandler = require('./middleware/errorHandler');


// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

//const limiter = require('./middleware/rateLimit');

//app.use(limiter); // Aplica rate limiting a todas las rutas


// Importar rutas
const departmentRoutes = require('./routes/department.routes');
const employeeRoutes = require('./routes/employee.routes');

app.use('/api/departments', departmentRoutes);
app.use('/api/employees', employeeRoutes);

app.get('/', (req, res) => {
    res.send('API ejecutándose');
});

// Middleware de manejo de errores 
app.use(errorHandler);
module.exports = app;
