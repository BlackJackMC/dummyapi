const { getDB } = require("../config/database");

getProducts = async (req, res) => {
  try {
    const db = getDB();
    const query = {};
    const option = {};

    const { name, minPrice, maxPrice, start = 1, end = 4 } = req.query;

    if (name) {
      query.name = RegExp(name, "i");
    }

    if (minPrice) {
      query.price = { ...query.price, $gte: parseInt(minPrice) };
    }

    if (maxPrice) {
      query.price = { ...query.price, $lte: parseInt(maxPrice) };
    }

    const start_int = parseInt(start);
    const end_int = parseInt(end);
    option.skip = start_int - 1;
    option.limit = end_int - start_int + 1;


    const products = await db
      .collection(process.env["DB_PRODUCT_NAME"])
      .find(query, option)
      .toArray();


    res.status(200).json(products);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

module.exports = {
  getProducts,
};
