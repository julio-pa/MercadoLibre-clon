const express = require('express');
require('dotenv').config();

const productRoutes = require('./routes/product')

const app = express();
const PORT = process.env.PORT || 5005;

//middelware
app.use('/api', productRoutes)
app.use(express.json())

//DB connection
const mongoose = require('mongoose')

mongoose.set('strictQuery', false)
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('Conectado a BBDD', mongoose.connection.name));


//Cors
const cors = require('cors')
const whiteList = ['http://localhost:5173']

app.use(cors({
  origin: whiteList
}));

app.listen(PORT, () => console.log(`Servidor levantado en 
http://localhost:${PORT}`))