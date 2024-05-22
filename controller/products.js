const { getDB } = require("../database");

getproducts = async (req, res) => {
  try {
    const db = getDB();
    const query = {};
    const option = {};

    const { name, minPrice, maxPrice, limit } = req.query;

    if (name) {
      query.name = RegExp(name, "i");
    }

    if (minPrice) {
      query.price = { ...query.price, $gte: parseInt(minPrice) };
    }

    if (maxPrice) {
      query.price = { ...query.price, $lte: parseInt(maxPrice) };
    }

    if (limit) {
      option.limit = parseInt(limit);
    }


    const products = await db
      .collection("products")
      .find(query, option)
      .toArray();


    res.status(200).json(products);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

module.exports = {
  getproducts,
};
