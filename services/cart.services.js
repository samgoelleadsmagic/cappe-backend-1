const db = require("../models/index");
const CartQuery = require('./queries/cart.queries');

const Cart = db.cart;

module.exports = class CartService {
    static async addItemToCart(data) {
        try {
          
          const dataJSON = 
          {
              userID : data.userID,
              productID: data.productID
          }
          const result = await CartQuery.addItemToCart(dataJSON);
          
          return result;
        } catch (error) {
          return error;
        }
    }
}