const { Schema, default: mongoose } = require('mongoose')

require('mongoose')

const PlayerSchema = Schema({
    firstName: {
        type: String,
        require: true
    },

    lastName: {
        type: String,
        require: true,
    },

    age: {
        type: Number,
        require: true,
    },

    nationality: {
        type: String,
        require: true,
    },
    
    position: {
        type: String,
        require: true
    },

    number: {
        type: Number,
        require: true,
    },

    image: {
        type: String,
        require: false,
    }
})

const playerModel = mongoose.model('Player', PlayerSchema)

module.exports = playerModel