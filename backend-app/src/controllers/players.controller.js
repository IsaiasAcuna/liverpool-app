const {getPlayersService, getPlayerNameService, addPlayerService, updatePlayerService, deletePlayerService} = require('../services/player.services')

// Defincion de las funciones que respoden
// -> la logica de dichas funciones -> service.js

const getPlayersController = async (request, response) => {
    
    const allPlayers = await getPlayersService(request) // allCars

    response.json(allPlayers)
}

const getPlayerNameController = async (request, response) => {

    const player = await getPlayerNameService(request)
    
    response.json(player)
}

const addPlayerController = async (request, response) => {
    const addPlayer = await addPlayerService(request)

    response.json(addPlayer)
}

const updatePlayerController = async (request, response) => {
    const updatePlayer = await updatePlayerService(request)

    response.json(updatePlayer)
}

const deletePlayerController = async (request, response) => {

    const deletePlayer = await deletePlayerService(request)

    response.json(deletePlayer)
}

module.exports = {
    getPlayersController,
    getPlayerNameController,
    addPlayerController,
    updatePlayerController,
    deletePlayerController
}