const express = require("express");
const _ = express.Router()
const registrationController = require("../../controllers/registrationController");
const loginController = require("../../controllers/loginController");

_.post('/registration', registrationController)




module.exports = _;