
#⚽ Liverpool App

Aplicación web fullstack para gestionar jugadores del Liverpool FC. Permite crear, editar, buscar y eliminar jugadores, con validaciones robustas, diseño responsive y estructura escalable.

##📦 Estructura del proyecto

liverpool-app/ 
├── frontend-app/ # Frontend en Next.js + TailwindCSS 
├── backend-app/ # Backend en Node.js + Express + MongoDB 
├── .gitignore # Ignora node_modules, .env, etc. 
└── README.md # Este archivo

##🚀 Tecnologías utilizadas

###Frontend:

####Next.js
#### React
#### TailwindCSS
####TypeScript
####Inputs controlados y validaciones personalizadas

###Backend:

Node.js
Express
MongoDB
Mongoose
express-validator
🛠️ Instalación

$ git clone https://github.com/tu-usuario/liverpool-app.git cd liverpool-app

Instalar dependencias: cd client && npm install cd ../server && npm install

Configurar variables de entorno: Crear archivos .env en client/ y server/ basados en los .env.example

client/.env: NEXT_PUBLIC_API_URL=http://localhost:4000

server/.env: PORT=4000 MONGO_URI=mongodb://localhost:27017/liverpool

▶️ Scripts

Frontend: cd client npm run dev

Backend: cd server npm run dev

✅ Funcionalidades

Crear, editar y eliminar jugadores
Búsqueda con filtros dinámicos
Validaciones en frontend y backend
Traducción/localización de datos
Diseño responsive y accesible
Modularidad y escalabilidad
📁 Estructura recomendada

Frontend: client/ ├── components/ │ ├── PlayerForm/ │ ├── PlayerCard/ │ └── ... ├── pages/ ├── utils/ └── styles/

Backend: server/ ├── routes/ ├── controllers/ ├── models/ ├── middlewares/ └── validators/

🧪 Testing y mejoras futuras

 Tests unitarios con Jest
 Autenticación y roles
 Paginación y ordenamiento
 Modo oscuro 🌙
👨‍💻 Autor

Isaias Acuña — Desarrollador Fullstack MERN apasionado por la accesibilidad, la modularidad y la experiencia de usuario.

📄 Licencia

Este proyecto está bajo la licencia MIT.
