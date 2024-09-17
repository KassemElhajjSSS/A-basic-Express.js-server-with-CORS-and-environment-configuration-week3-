const express = require('express')
const cors = require('cors')

const app = express()

//Routes
const home = require('./routes/index')
app.use('/home', home)

require('dotenv').config()

const corsOptions ={
    origin : 'frontEnd server url',
    optionsSuccessStatus: 200
}

app.use(express.json())
app.use(cors(corsOptions))

module.exports = app

