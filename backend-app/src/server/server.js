const express = require('express')
const cors = require('cors')
const playerRouter = require('../routers/player.routes')

const app = express()

app.use(cors({
  origin: ['http://localhost:3000', 'https://liverpool-web-6eys.onrender.com'],
  credentials: true,
}));

app.use(express.json())

app.use('/player', playerRouter)

module.exports = app