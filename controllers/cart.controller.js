const CartService = require('../services/cart.services');

module.exports = class Cart {
    static async apiAddItemToCart(req, res, next) {
      try {
        const cart = await CartService.addItemToCart(req.header ,req.body);
        res.json(cart);
      } catch (error) {
        res.status(500).json({ error: error });
      }
    }
}