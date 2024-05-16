const express = require("express");
const { product } = require("./router/product");
const routes = express.Router();

routes.get("/", (req, res) => {
  res.send(`<p> An API for web training in LHPSC </p>`);
});

routes.get("/ping", (req, res) => {
  res.send(`<p> Pong </p>`);
});

routes.use("/product", product);

module.exports = {
  routes,
};
