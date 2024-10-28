const express = require('express');
const dotenv = require('dotenv');

dotenv.config() // Configure the environment variables
const app = express()
const PORT = process.env.PORT || 3500
const mongoose = require('./connection/mongoDB.ts')



app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`)
})