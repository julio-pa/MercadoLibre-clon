const express = require('express');

const router = express.Router();
const cors = require('cors')


//Model
const Product = require('../Models/Products.model');

//get products
router.get('/products', (req, res) => {

  Product.find()
    .then(allProducts => res.json(allProducts))
});

//get products by ID
router.get('/details/:product_id', cors(), (req, res) => {
  const { product_id } = req.params

  Product
    .findById(product_id)
    .then(product => res.json(product))
});

//get products by category

router.get('/products/:category', (req, res) => {
  const { category } = req.params

  Product
    .find()
    .then(product => {
     const results = product.filter(item => item.category === category);
      res.json(results)
    })
})

module.exports = router
