const OrderQuery = require("./queries/orderDetails.queries");
const { admin }= require("./user.services");


module.exports = class OrderService {
  static async placeOrder(headerData, data) {
    try {
      const decodedToken = await admin.auth().verifyIdToken(headerData.authorization);
      if (decodedToken) {
        const dataJSON = {
          phone: decodedToken.phone_number.replace('+91', ''),
          address_ID: data.addressID
        };
        const result = await OrderQuery.placeOrder(dataJSON);
        return result;
      }
    } catch (error) {
      return error;
    }
  }

  static async getDeliveryAddresses(headerData) {
    try {
      const decodedToken = await admin.auth().verifyIdToken(headerData.authorization);
      if (decodedToken) {
        const dataJSON = {
          phone: decodedToken.phone_number.replace('+91', ''),
        };
        const result = await OrderQuery.getDeliveryAddresses(dataJSON);
        return result;
      }
    } catch (error) {
      return error;
    }
  }
  static async addDeliveryAddress(headerData, data) {
    try {
      const decodedToken = await admin.auth().verifyIdToken(headerData.authorization, data);
      if (decodedToken) {
        const dataJSON = {
          phone: decodedToken.phone_number.replace('+91', ''),
          line_1: data.line_1,
          line_2: data.line_2,
          landmark: data.landmark,
          city: data.city,
          state: data.state,
          country: data.country,
          pincode: data.pincode,
          contact: data.phone
        };
        const result = await OrderQuery.addDeliveryAddress(dataJSON);
        return result;
      }
    } catch (error) {
      return error;
    }
  }
}