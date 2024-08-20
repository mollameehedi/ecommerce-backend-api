require('dotenv').config()
const express = require('express')
const app = express()
const dbConnection = require('./config/dbConfig')

dbConnection()
app.use(express.json)

app.get('/', function (req, res) {
  res.send('Hello World')
})
app.listen(8000,function(){
    console.log('Server Is Running');
    
})