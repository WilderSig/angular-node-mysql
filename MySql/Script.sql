-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS empresa;
USE empresa;

-- Crear la tabla Departamento
CREATE TABLE IF NOT EXISTS Departamento (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL
);

-- Crear la tabla Empleado
CREATE TABLE IF NOT EXISTS Empleado (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    puesto VARCHAR(100) NOT NULL,
    salario DECIMAL(10,2) NOT NULL,
    fecha_de_contratacion DATE NOT NULL,
    departmentId INT NOT NULL,
    FOREIGN KEY (departmentId) REFERENCES Departamento(id) ON DELETE CASCADE
);

-- Insertar algunos datos de prueba
INSERT INTO Departamento (nombre) VALUES ('TI'), ('Recursos Humanos'), ('Ventas');

INSERT INTO Empleado(nombre, email, puesto, salario, fecha_de_contratacion, departmentId) VALUES
('Juan Pérez', 'juan@example.com', 'Desarrollador', 50000.00, '2024-01-15', 1),
('María López', 'maria@example.com', 'Reclutadora', 40000.00, '2023-12-10', 2),
('Carlos Ramírez', 'carlos@example.com', 'Vendedor', 45000.00, '2022-11-20', 3);
