const db = require("../../models/index.js");

module.exports = class OrderDetailsQuery {
  static async placeOrder(data) {
    // The Promise constructor should catch any errors thrown on
    // this tick. Alternately, try/catch and reject(err) on catch.

    const QUERY = "CALL sp_createOrder(:phone, :address_ID)";

    //var query_var = [name];

    const rows = await db.sequelize.query(QUERY, {
      replacements: data,
    });
    return rows;
  }
  static async getDeliveryAddresses(data) {
    // The Promise constructor should catch any errors thrown on
    // this tick. Alternately, try/catch and reject(err) on catch.

    const QUERY = "CALL sp_getDeliveryAddresses(:phone)";

    //var query_var = [name];

    const rows = await db.sequelize.query(QUERY, {
      replacements: data,
    });
    return rows;
  }
  static async addDeliveryAddress(data) {
    // The Promise constructor should catch any errors thrown on
    // this tick. Alternately, try/catch and reject(err) on catch.

    const QUERY = "CALL sp_addDeliveryAddress(:phone)";

    //var query_var = [name];

    const rows = await db.sequelize.query(QUERY, {
      replacements: data,
    });
    return rows;
  }
}