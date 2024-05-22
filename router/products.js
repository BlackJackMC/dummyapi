const express = require("express");
const productsController = require("../controller/products");
const products = express.Router();

products.get("/", productsController.getproducts);

module.exports = {
  products,
};
