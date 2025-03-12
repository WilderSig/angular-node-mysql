const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Department = require('./department.model');

const Employee = sequelize.define('Employee', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    puesto: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    salario: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    fecha_de_contratacion: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    departmentId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'departamento', // ⬅️ Usar el nombre exacto de la tabla
            key: 'id',
        },
    },
}, {
    tableName: 'empleado',
    timestamps: false,
});

// Relación: Un empleado pertenece a un departamento
Employee.belongsTo(Department, { foreignKey: 'departmentId' });

module.exports = Employee;
