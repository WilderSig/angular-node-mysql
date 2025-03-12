const Department = require('../models/department.model');

exports.createDepartment = async (req, res) => {
    try {
        const { nombre } = req.body;
        if (!nombre) {
            return res.status(400).json({ error: "El nombre del departamento es obligatorio" });
        }

        const department = await Department.create({ nombre });
        res.status(201).json(department);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllDepartments = async (req, res) => {
    try {
        const departments = await Department.findAll();
        res.status(200).json(departments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getDepartmentById = async (req, res) => {
    try {
        const { id } = req.params;
        const department = await Department.findByPk(id);

        if (!department) {
            return res.status(404).json({ error: "Departamento no encontrado" });
        }

        res.status(200).json(department);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateDepartment = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre } = req.body;

        const department = await Department.findByPk(id);
        if (!department) {
            return res.status(404).json({ error: "Departamento no encontrado" });
        }

        await department.update({ nombre });
        res.status(200).json({ message: "Departamento actualizado correctamente", department });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteDepartment = async (req, res) => {
    try {
        const { id } = req.params;
        const department = await Department.findByPk(id);

        if (!department) {
            return res.status(404).json({ error: "Departamento no encontrado" });
        }

        await department.destroy();
        res.status(200).json({ message: "Departamento eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
