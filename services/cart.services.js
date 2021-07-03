const db = require("../models/index");
const CartQuery = require("./queries/cart.queries");
const admin = require("./user.services");

const Cart = db.cart;

module.exports = class CartService {
  static async addItemToCart(headerData, data) {
    try {
      const decodedToken = await admin.auth().verifyIdToken(headerData.token);
      if (decodedToken) {
        const dataJSON = {
          phone: decodedToken.phone_number.replace('+91', ''),
          productID: data.productID,
        };
        const result = await CartQuery.addItemToCart(dataJSON);

        return result;
      }
    } catch (error) {
      return error;
    }
  }
};
