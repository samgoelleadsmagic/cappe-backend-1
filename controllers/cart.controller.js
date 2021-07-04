const CartService = require('../services/cart.services');

module.exports = class Cart {
    static async apiAddItemToCart(req, res, next) {
      try {
        const cart = await CartService.addItemToCart(req.headers ,req.body);
        res.json(cart);
      } catch (error) {
        res.status(500).json({ error: error });
      }
    }

    static async apireduceItemQuantity(req, res, next) {
      try {
        const cart = await CartService.reduceItemQuantity(req.headers ,req.body);
        res.json(cart);
      } catch (error) {
        res.status(500).json({ error: error });
      }
    }

    static async apiGetCartItems(req, res, next) {
      try {
        const cart = await CartService.getCartItems(req.headers);
        res.json(cart);
      } catch (error) {
        res.status(500).json({ error: error });
      }
    }
}