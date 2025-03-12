const sequelize = require('../config/database');
const Employee = require('./employee.model');
const Department = require('./department.model');

// Definimos la relación uno a muchos
Department.hasMany(Employee, { foreignKey: 'departmentId', onDelete: 'CASCADE' });
Employee.belongsTo(Department, { foreignKey: 'departmentId' });

const db = { sequelize, Employee, Department };

module.exports = db;
