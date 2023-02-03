const express = require('express');

const app = express()

//DB connection
const mongoose = require('mongoose')

mongoose.set('strictQuery', false)
  .connect('mongodb+srv://julio-pg:NE5eX0jIJ1x8YhGk@technology.az1ziqg.mongodb.net/Products')
  .then(() => console.log('Conectado a BBDD', mongoose.connection.name));


//Cors
const cors = require('cors')
app.use(cors());

//Model
const Product = require('./Models/Products.model');


const PORT = 5005


//Routing
app.get('/api/products', (req, res) => {

  Product.find()
    .then(allProducts => res.json(allProducts))
})

app.get('/api/details/:product_id', (req, res) => {
  const { product_id } = req.params

  Product
    .findById(product_id)
    .then(product => res.json(product))
})


app.listen(PORT, () => console.log(`Servidor levantado en 
http://localhost:${PORT}`))