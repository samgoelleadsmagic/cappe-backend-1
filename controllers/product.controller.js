const ProductServices = require("../services/product.services");

module.exports = class Products {
  static async apiGetAllProducts(req, res, next) {
    try {
      const products = await ProductServices.getAllProducts(req.body);
      if (!products) {
        res.status(404).json("There are no products yet!");
      }
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
  static async apiAddProduct(req, res, next) {
    try {
      const products = await ProductServices.addProduct(req.body);
      if (!products) {
        res.status(404).json("There are no products yet!");
      }
      if (products[0].Inserted == "Inserted") {
        res.json({
          addedProduct: true,
        });
      }
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
};
