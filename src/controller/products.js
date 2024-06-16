const { getDB } = require("../config/database");

getProducts = async (req, res) => {
  try {
    const db = getDB();
    const query = {};
    const option = {};
    const productPerPage = 8;

    const { name, minPrice, maxPrice, skip, limit } = req.query;

    if (name) {
      query.name = RegExp(name, "i");
    }

    if (minPrice) {
      query.price = { ...query.price, $gte: parseInt(minPrice) };
    }

    if (maxPrice) {
      query.price = { ...query.price, $lte: parseInt(maxPrice) };
    }

    option.limit =  parseInt(limit) || productPerPage;
    option.skip = parseInt(skip) || 0;


    const products = await db
      .collection(process.env["DB_PRODUCT_NAME"])
      .find(query, option)
      .toArray();


    res.status(200).json({
        "product_list": products,
        "metadata": req.query
  });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

module.exports = {
  getProducts,
};
