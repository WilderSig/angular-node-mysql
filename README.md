# 🚀 Sistema de Gestión de Empleados

Este proyecto es una aplicación web desarrollada en **Angular** (frontend) y **Node.js + Express** (backend), con **MySQL** como base de datos. Permite gestionar empleados y departamentos, con opciones para **listar, agregar y eliminar empleados**.

---

## 📌 Tecnologías Usadas
- **Frontend:** Angular, Angular Material
- **Backend:** Node.js, Express.js, Sequelize
- **Base de Datos:** MySQL
- **Docker:** Para contenerizar la API y la base de datos

---

## 🚀 Instalación y Ejecución

### 🔹 **Requisitos Previos**
Antes de empezar, asegúrate de tener instalado:
- [Node.js](https://nodejs.org/) (Versión recomendada: **18.x**)
- [Angular CLI](https://angular.io/cli) (Instalar con: `npm install -g @angular/cli`)
- [Docker](https://www.docker.com/) (Opcional, pero recomendado)
- [MySQL](https://dev.mysql.com/downloads/installer/) (Si no usas Docker)

---

### 🔹 **1. Clonar el Repositorio**
Ejecuta el siguiente comando en tu terminal:

```bash
git clone https://github.com/tuusuario/tu-repositorio.git
cd tu-repositorio
```

---

### 🔹 **2. Configurar la Base de Datos (MySQL)**

#### 📌 **Si usas MySQL en tu sistema (sin Docker)**
1. **Crea la base de datos manualmente en MySQL:**

2. **Script DB:**
```
En la carpeta MySql está incluido el script de la base de datos.
```

3. **Actualiza el archivo `.env` en la carpeta `Backend` con tus credenciales:**

```
DB_HOST=localhost
DB_USER=user
DB_PASSWORD=password
DB_NAME=empresa
DB_PORT=3306
```

---

### 🔹 **3. Configurar y Ejecutar el Backend**
Ve a la carpeta del backend y **configura las dependencias**:

```bash
cd Backend
npm install
```

Para correr el backend en modo desarrollo:

```bash
npm start
```

El servidor correrá en **http://localhost:3000**.

---

### 🔹 **4. Configurar y Ejecutar el Frontend**
Ve a la carpeta del frontend e instala las dependencias:

```bash
cd ../Frontend
npm install
```

Para iniciar la aplicación Angular:

```bash
ng serve 
```

Esto abrirá la app en **http://localhost:4200**.

---

### 🔹 **5. (Opcional) Usar Docker para Contenerizar la Aplicación**
Si prefieres correr todo con **Docker**, usa:

```bash
docker-compose up --build -d
```

Esto levantará:
- El backend en **http://localhost:3000**
- La base de datos MySQL en **puerto 3306**

Para detener los contenedores:

```bash
docker-compose down
```
### Nota: Si la base de datos utiliza el mismo puerto en tu máquina, necesitas detener el servicio para que la imagen de MySql se ejecute correctamente.
---

## 📌 Endpoints de la API

| Método | Ruta                  | Descripción                         |
|--------|------------------------|-------------------------------------|
| GET    | `/api/employees`       | Obtener todos los empleados        |
| POST   | `/api/employees`       | Agregar un nuevo empleado          |
| DELETE | `/api/employees/:id`   | Eliminar un empleado               |
| GET    | `/api/departments`     | Obtener todos los departamentos    |

---

## 📌 Funcionalidades

✅ **Listar empleados en una tabla**  
✅ **Agregar empleados con un formulario modal**  
✅ **Eliminar empleados con un botón en la tabla**  
✅ **Seleccionar departamento desde un `select` dinámico**  
✅ **Usar Docker para facilidad de despliegue**  

