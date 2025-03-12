const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Department = sequelize.define('Department', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'departamento',
    timestamps: false,
});

module.exports = Department;
