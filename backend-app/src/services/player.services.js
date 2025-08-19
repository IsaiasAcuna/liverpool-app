const playerModel = require('../models/player.model');
const { ObjectId } = require('mongodb');

require('../models/player.model')

const getPlayersService = async (req, res) => {
  const allPlayers = await playerModel.find();

  if (!allPlayers) return { message: "No players found", statusCode: 404 };

    return allPlayers;
};

const getPlayerNameService = async (request, res) => {

    const { playerName } = request.params;

    //console.log(playerName);
    const player = await playerModel.findOne({ $or: [{ firstName: playerName }, { lastName: playerName }] });

  //console.log(player + '  :    lo que encuentra');
    if (!player) return { message: "Player not found", statusCode: 404 };

    return player;
};

const addPlayerService = async (request, response) => {
  try {
    const player = request.body;

    // Convierte al objeto original en objeto mongo y lo prepara para la insercion
    const newPlayer = new playerModel(player);

    // Confirma la insercion y guarda el objeto en la coleccion
    await newPlayer.save();

    return { message: "Player added successfully", statusCode: 201 };
  } catch (error) {
    return { message: error.message, statusCode: 500 };
  }
};

const updatePlayerService = async (request, response) => {
  try {
    const { id } = request.params;
    const playerToEdit = request.body;

    const playerById = await playerModel.findById(id);

    if (!playerById) return { message: "player not found", statusCode: 404 };     

    playerById.firstName = playerToEdit.firstName;
    playerById.lastName = playerToEdit.lastName
    playerById.age = playerToEdit.age;
    playerById.nationality = playerToEdit.nationality;
    playerById.position = playerToEdit.position;
    playerById.number = playerToEdit.number;
    playerById.image = playerToEdit.image;

    await playerById.save();

    return { message: "Player updated successfully", statusCode: 200 };
  } catch (error) {
    return { message: error.message, statusCode: 500 };
  }
};

const deletePlayerService = async (request, response) => {
    const {id} = request.params;
    const ObjectId = id

    try {
        const playerToDelete = await playerModel.deleteOne({ _id: ObjectId});

        if (!playerToDelete) return { message: "Player not found", statusCode: 404 };
         
        if(playerToDelete.deletedCount === 0) {
            return { message: "player not found", statusCode: 404 };
        }

        return {message: 'player deleted successfully'}
    } catch(error){
        return {message: error.message, statusCode: 500 }
    }
}

module.exports = {
  getPlayersService,
  getPlayerNameService,
  addPlayerService,
  updatePlayerService,
  deletePlayerService
};