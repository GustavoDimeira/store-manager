const express = require('express');
const productController = require('../controllers/product.controller');

const productRoute = express.Router();

productRoute.get('/', productController.controllerGetAll);
// productRoute.get('/products/:id', productController.controllerGetById);
// productRoute.post('/products', productController.controllerCreate);

module.exports = {
  productRoute,
};