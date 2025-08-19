const express = require("express");
const { check } = require("express-validator");

const playerRouter = express.Router();

const {
    getPlayersController,
    getPlayerNameController,
    addPlayerController,
    updatePlayerController,
    deletePlayerController,
} = require("../controllers/players.controller");

const checkPlayerTypes = require("../utils/checkPlayerTypes");
const validateTypes = require("../utils/validateTypes");

playerRouter.get("/", getPlayersController);
playerRouter.get("/:playerName", getPlayerNameController);

playerRouter.post("/",
    check("firstName")
        .trim().notEmpty().withMessage("El nombre no debe estar vacio")
        .matches(/^[^\d]*$/).withMessage("El nombre no debe contener números"),
    check("lastName")
        .isString()
        .trim().notEmpty().withMessage("El Apellido no es valido")
        .matches(/^[^\d]*$/).withMessage("El Apellido no debe contener números"),
    check("age")
        .isInt({ min: 16, max: 100 }).withMessage("La Edad no es valido"),
    check("nationality")
        .isString()
        .trim()
        .notEmpty().withMessage("La Nacionalidad no es valido")
        .matches(/^[^\d]*$/).withMessage("La Nacionalidad no debe contener números"),
    check("position")
        .isString()
        .trim()
        .notEmpty().withMessage("Posicion no es valido"),
    check("number")
        .isInt({ min: 1, max: 100 }).withMessage("Dorsal no es valido"),
    validateTypes, addPlayerController);

playerRouter.put("/:id",
    check("firstName")
        .isString()
        .trim()
        .notEmpty().withMessage("El Nombre no debe estar vacio")
        .matches(/^[^\d]*$/).withMessage("El Nombre no debe contener números"),
    check("lastName")
        .isString()
        .trim()
        .notEmpty().withMessage('El Apellido no debe estar vacio')
        .matches(/^[^\d]*$/).withMessage("El Apellido no debe contener números"),
    check("age")
        .isInt({ min: 16, max: 100 }).withMessage("La Edad no es valida"),
    check("nationality")
        .isString()
        .trim()
        .notEmpty().withMessage("La Nacionalidad no puede estar vacia")
        .matches(/^[^\d]*$/).withMessage("La Nacionalidad no debe contener números"),
    check("position")
        .isString()
        .trim()
        .notEmpty().withMessage("La Posicion no puede estar vacia"),
    check("number")
        .isInt({ min: 1, max: 100 }).withMessage("El Dorsal no es valido"),
    validateTypes,
    checkPlayerTypes, updatePlayerController);

playerRouter.delete("/:id", deletePlayerController);

module.exports = playerRouter;


