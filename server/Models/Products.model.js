const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  title: String,
  price: String,
  category: String,
  img: String
})

const Product = mongoose.model('product', productSchema)

module.exports = Product