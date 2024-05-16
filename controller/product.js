const { getDB } = require("../database");

getProduct = async (req, res) => {
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

    console.log(query);

    const product = await db
      .collection("product")
      .find(query, option)
      .toArray();

    console.log(product.length);

    res.status(200).json(product);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

module.exports = {
  getProduct,
};
