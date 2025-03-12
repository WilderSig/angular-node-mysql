const Employee = require('../models/employee.model');
const Department = require('../models/department.model');

exports.createEmployee = async (req, res) => {
    try {
        const { nombre, email, puesto, salario, fecha_de_contratacion, departmentId } = req.body;

        //Verificamos si existe el departamento
        const department = await Department.findByPk(departmentId);
        if (!department) {
            return res.status(404).json({ error: "Departamento no encontrado" });
        }
        //creamos el empleado
        const employee = await Employee.create({
            nombre,
            email,
            puesto,
            salario,
            fecha_de_contratacion,
            departmentId,
        });

        res.status(201).json(employee);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllEmployees = async (req, res) => {
    try {
        const employees = await Employee.findAll({
            include: Department, //obtenemos el nombre del departamento con el id.
        });
        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getEmployeeById = async (req, res) => {
    try {
        const { id } = req.params;
        const employee = await Employee.findByPk(id, {
            include: Department,
        });

        if (!employee) {
            return res.status(404).json({ error: "Empleado no encontrado" });
        }

        res.status(200).json(employee);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateEmployee = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, email, puesto, salario, fecha_de_contratacion, departmentId } = req.body;

        // Buscar empleado
        const employee = await Employee.findByPk(id);
        if (!employee) {
            return res.status(404).json({ error: "Empleado no encontrado" });
        }

        // Verificar si el departamento existe
        const department = await Department.findByPk(departmentId);
        if (!department) {
            return res.status(404).json({ error: "Departamento no encontrado" });
        }

        // actualizamos datos de empleado
        await employee.update({
            nombre,
            email,
            puesto,
            salario,
            fecha_de_contratacion,
            departmentId,
        });

        res.status(200).json({ message: "Empleado actualizado correctamente", employee });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteEmployee = async (req, res) => {
    try {
        const { id } = req.params;
        const employee = await Employee.findByPk(id);

        if (!employee) {
            return res.status(404).json({ error: "Empleado no encontrado" });
        }

        await employee.destroy();
        res.status(200).json({ message: "Empleado eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
