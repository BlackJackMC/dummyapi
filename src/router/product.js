const express = require("express");
const productController = require("../controller/product");
const product = express.Router();

product.get("/", productController.getProduct);

module.exports = {
  product,
};
