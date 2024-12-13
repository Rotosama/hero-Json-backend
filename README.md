# Hero JSON Backend

## 📖 Descripción  
Este proyecto fue desarrollado como un ejercicio práctico durante el bootcamp de **The Bridge** para fortalecer los conocimientos de desarrollo backend. Se trata de una API básica que simula la gestión de héroes utilizando un archivo JSON como base de datos. El proyecto tiene como objetivo practicar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) y la implementación de rutas RESTful con una estructura sencilla.

---

## ✨ Características principales  
- **Base de datos:** Almacena la información de héroes en un archivo JSON.  
- **Operaciones CRUD:**  
  - Crear nuevos héroes.  
  - Leer información de héroes individuales o de toda la colección.  
  - Actualizar datos de héroes existentes.  
  - Eliminar héroes.  
- **Framework:** Desarrollado con **Node.js** y **Express**.  
- **Persistencia sencilla:** Utiliza un archivo JSON para almacenar los datos.  
- **Estructura RESTful:** Implementación de rutas claras y organizadas.  

---

## 🚀 Cómo instalar y ejecutar el proyecto  

### Prerrequisitos  
Asegúrate de tener instalado lo siguiente en tu máquina:  
- [Node.js](https://nodejs.org/) (v14 o superior).  
- [Git](https://git-scm.com/).  

### Instrucciones  

1. **Clonar este repositorio:**
   
   ```bash
   git clone https://github.com/Rotosama/hero-Json-backend.git
   cd hero-Json-backend
   
3. **Instalar Node.js (si no lo tienes):**

Descarga Node.js desde su página oficial.
Sigue las instrucciones de instalación para tu sistema operativo.
Verifica la instalación con:

    `node -v`
    `npm -v`
    
3. **Instalar las dependencias del proyecto:**
Una vez dentro de la carpeta del proyecto, ejecuta:

    ```bash
    npm install
    npm start

   
5. **Ejecutar el servidor:**
   
    `npm start`
   
El servidor se ejecutará en el puerto configurado (por defecto, suele ser el http://localhost:3000).

6. **Probar los endpoints:**
   
Utiliza herramientas como **Postman** o **Insomnia**, o simplemente tu navegador, para interactuar con la API.

## 🛠 Endpoints principales  

### **GET** `/heroes`  
Obtiene una lista de todos los héroes.

---

### **GET** `/heroes/:id`  
Obtiene la información de un héroe específico por su ID.

---

### **POST** `/heroes`  
Crea un nuevo héroe.  
**Body (JSON):**  
```json
{
  "name": "Nombre del héroe",
  "power": "Poder del héroe"
}

```

---

### **PUT** `/heroes/:id`
**Body (JSON):**  
```json
{
  "name": "Nombre actualizado",
  "power": "Poder actualizado"
}
```

---


### **DELETE** `/heroes/:id`
Elimina un héroe por su ID.

---


## 🎯 Próximos pasos  
Este proyecto puede evolucionar añadiendo funcionalidades como:  
- Integración con una base de datos (MongoDB, PostgreSQL, etc.).  
- Autenticación de usuarios (JWT, OAuth, etc.).  
- Validaciones más robustas.  
- Pruebas unitarias con frameworks como Jest o Mocha.


