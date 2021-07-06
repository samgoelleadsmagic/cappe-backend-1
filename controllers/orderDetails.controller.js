const OrderService = require("../services/orderDetails.services");

module.exports = class OrderCtrl {
  static async apiPlaceOrder(req, res, next) {
    try {
      const order = await OrderService.placeOrder(req.headers, req.body);
      res.json(order);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
  static async apiGetDeliveryAddresses(req, res, next) {
    try {
      const deliveryAddresses = await OrderService.getDeliveryAddresses(
        req.headers
      );
      res.json(deliveryAddresses);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
  static async apiAddDeliveryAddresses(req, res, next) {
    try {
      const address_id = await OrderService.addDeliveryAddress(
        req.headers, req.body
      );
      res.json(address_id);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
};
