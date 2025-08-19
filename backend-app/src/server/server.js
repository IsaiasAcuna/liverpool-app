const express = require('express')
const cors = require('cors')
const playerRouter = require('../routers/player.routes')

const app = express()

app.use(cors({
  origin: ['http://localhost:3000', 'https://tu-frontend.vercel.app'], // 👈 tus orígenes permitidos
  credentials: true, // 👈 necesario si usás cookies o headers de autenticación
}));

app.use(express.json())

app.use('/player', playerRouter)

module.exports = app