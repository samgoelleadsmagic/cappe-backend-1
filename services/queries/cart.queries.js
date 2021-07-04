const db = require("../../models/index.js");

module.exports = class CartQuery {
  static async addItemToCart(data) {
    // The Promise constructor should catch any errors thrown on
    // this tick. Alternately, try/catch and reject(err) on catch.

    const QUERY = "CALL sp_addItemToCart(:phone, :productID)";

    //var query_var = [name];

    const rows = await db.sequelize.query(QUERY, {
      replacements: data,
    });
    return rows;
  }
  
  static async reduceItemQuantity(data) {
    // The Promise constructor should catch any errors thrown on
    // this tick. Alternately, try/catch and reject(err) on catch.

    const QUERY = "CALL sp_reduceItemQuantityInCart(:phone, :productID)";

    //var query_var = [name];

    const rows = await db.sequelize.query(QUERY, {
      replacements: data,
    });
    return rows;
  }
  
  static async getCartItems(data) {
    // The Promise constructor should catch any errors thrown on
    // this tick. Alternately, try/catch and reject(err) on catch.

    const QUERY = "CALL sp_getCartItems(:phone)";

    //var query_var = [name];

    const rows = await db.sequelize.query(QUERY, {
      replacements: data,
    });
    return rows;
  }
};
