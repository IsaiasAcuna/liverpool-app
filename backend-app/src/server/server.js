const express = require('express')
const cors = require('cors')
const playerRouter = require('../routers/player.routes')

const app = express()

app.use(cors())

app.use(express.json())

app.use('/player', playerRouter)

module.exports = app