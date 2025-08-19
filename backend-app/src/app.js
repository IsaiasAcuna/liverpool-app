const app = require('./server/server')


require('./db/config')

require('dotenv').config();


const PORT = process.env.PORT || 3000;


app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));