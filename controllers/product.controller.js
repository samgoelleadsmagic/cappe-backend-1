const ProductServices = require("../services/product.services");

module.exports = class Products {
  static async apiGetAllProducts(req, res, next) {
    try {
      const products = await ProductServices.getAllProducts();
      if (!products) {
        res.status(404).json("There are no products yet!");
      }
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
};
