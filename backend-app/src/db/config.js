require('mongoose')

require('dotenv').config()
const mongoose = require('mongoose')

const DATABASE_URL = process.env.DATABASE_URL || "Base de datos caida"

console.log(DATABASE_URL);


(
    async () => {
        try {
            await mongoose.connect(DATABASE_URL)
        } catch (error) {
            console.log('no se pudio');
        }
    }
)();




