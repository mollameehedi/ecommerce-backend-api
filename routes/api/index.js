const express = require('express');
const _ = express.Router();
const authRoutes = require('./authRoutes.js');

_.use('/auth',authRoutes)

module.exports = _;