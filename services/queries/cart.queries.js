const db = require("../../models/index.js");

module.exports = class CartQuery {
  static async addItemToCart(data) {
      // The Promise constructor should catch any errors thrown on
      // this tick. Alternately, try/catch and reject(err) on catch.

      const QUERY =
        "CALL addItemToCart(:userID, :productID)";

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
