## ⚽ Liverpool App

Aplicación web fullstack para gestionar jugadores del Liverpool FC. Permite crear, editar, buscar y eliminar jugadores con validaciones robustas.

## 📦 Estructura del proyecto

liverpool-app/ <br>
├── frontend-app/ # Frontend en Next.js + TailwindCSS <br>
├── backend-app/ # Backend en Node.js + Express + MongoDB <br>
├── .gitignore # Ignora node_modules, .env, etc. <br>
└── README.md # Este archivo

## 🛠️ Tecnologías utilizadas

- **<u>[Next.js](https://nextjs.org/)</u>** - Aplicaciones web con componentes React.
- **<u>[React](https://es.react.dev)</u>** - Una biblioteca para interfaces de usuario web y nativas.
- **<u>[TailwindCSS](https://tailwindcss.com/)</u>** - Un framework CSS orientado a utilidades para construir diseños personalizados de forma rápida.
- **<u>[TypeScript](https://typescriptlang.org/)</u>** - Superset de JavaScript que agrega sintaxis para tipos estáticos.
- **<u>[Axios](https://axios-http.com/)</u>** - Cliente HTTP basado en promesas para el navegador y Node.js.
- **<u>[Node.js](https://nodejs.org/)</u>** - Entorno de ejecución de JavaScript.
- **<u>[Express](https://expressjs.com/)</u>** - Framework web minimalista y flexible para Node.js.
- **<u>[MongoDB](https://www.mongodb.com/)</u>** - Base de datos NoSQL.
- **<u>[Mongoose](https://mongoosejs.com/)</u>** - Librería ODM (Object Data Modeling) para MongoDB y Node.js.
- **<u>[express-validator](https://express-validator.github.io/docs)</u>** - Middleware para Express.js que permite validar y sanitizar datos de entrada.


## 🚀 Instalación

Tu necesitaras:
- [Node.js 18+ (recomendado 20 LTS)](https://nodejs.org/).
- [Git](https://git-scm.com/downloads).
  

1. Abrí la terminal (o consola) y escribí este comando para copiar el proyecto a tu computadora:

```bash
git clone https://github.com/tu-usuario/liverpool-app.git
```
2. Cada parte del proyecto tiene sus propias herramientas. Tenés que instalar las dependencias en ambas carpetas. <br>

- 🔧 **Frontend**

```bash
cd frontend-app
npm install
```
- 🔧 **Backend**

```bash
cd backend-app
npm install
```

3. Configurar variables de entorno: Crear archivos .env en frontend-app/ y backend-app/ con esta estructura.

- **Frontend** (.env)

``` 
NEXT_PUBLIC_API_URL=http://localhost:4000
```

- **Backend** (.env)

```
PORT=4000
MONGO_URI=mongodb://localhost:27017/liverpool
```

## ▶️ Scripts

- Frontend

```
cd frontend-app && npm run dev
```

- Backend

```
cd backend-app && npm run dev
```

## ✅ Funcionalidades

Crear, editar y eliminar jugadores.
Búsqueda con filtros dinámicos.
Validaciones en frontend y backend.
Traducción/localización de datos.
Modularidad y escalabilidad.

## 🧪 Testing y mejoras futuras

 - Tests unitarios con Jest
 - Validaciones en formularios
 - Mobile responsive
 - Modo oscuro
 - Idioma Ingles

## 👨‍💻 Autor

**<u>[Isaias Acuña](https://express-validator.github.io/docs)</u>** - Desarrollador Fullstack MERN con +3 años de experiencia.

## 📄 Licencia

Este proyecto está bajo la licencia MIT.
