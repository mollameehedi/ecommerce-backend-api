const express = require("express");
const _ = express.Router()
const registrationController = require("../../controllers/registrationController");
const loginController = require("../../controllers/loginController");
const otpController = require("../../controllers/otpController")

_.post('/registration', registrationController)
_.post('/otpverify', otpController)
_.post('/login', loginController)




module.exports = _;