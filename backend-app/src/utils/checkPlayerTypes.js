const checkPlayerTypes = (request, response, next) => {
    const player = request.body;

    if (!player || typeof player !== 'object') {
      return response.status(400).json({
        statusCode: 400,
        message: "El jugador no es un objeto válido, revisa el body de la petición."
      });
    }

    const arrayOfValidation = [];

    if (typeof player.firstName !== 'string') arrayOfValidation.push("First Name debe ser un string.");
    if (typeof player.lastName !== 'string') arrayOfValidation.push("Last Name debe ser un string.");
    if (typeof player.age !== 'number') arrayOfValidation.push("Age debe ser un number.");
    if (typeof player.nationality !== 'string') arrayOfValidation.push("Nationality debe ser un string.");
    if (typeof player.position !== 'string') arrayOfValidation.push("Position debe ser un string.");
    if (typeof player.number !== 'number') arrayOfValidation.push("Number debe ser un number.");

    if (arrayOfValidation.length > 0) {
        return response.status(400).json({
            statusCode: 400,
            message: "Revisa el objeto que mandaste wachin!",
            errors: arrayOfValidation
        });
    }

    next();
}

module.exports = checkPlayerTypes;
