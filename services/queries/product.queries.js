const db = require("../../models/index.js");

module.exports = class ProductService {
  static async insertProduct(data) {
      // The Promise constructor should catch any errors thrown on
      // this tick. Alternately, try/catch and reject(err) on catch.

      const QUERY =
        "CALL addProduct (:category, :description, :productName, :productDescription, :price, :picture, :brand)";

      //var query_var = [name];

      const rows = await db.sequelize.query(
        QUERY,
        {
          replacements: data,
        }
        )
        return rows;
    }
}
