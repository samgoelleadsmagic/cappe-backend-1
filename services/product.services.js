const db = require("../models/index");

db.sequelize.sync();
const Product = db.product;

module.exports = class ProductService {
  static async getAllProducts() {
    try {
      const allProducts = await Product.findAll();
      return allProducts;
    } catch (error) {
      console.log(`Could not fetch Users ${error}`);
    }
  }
};
