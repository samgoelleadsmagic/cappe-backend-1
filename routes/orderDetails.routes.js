const  express =  require("express");
const router = express.Router();
const OrderCtrl = require('../controllers/orderDetails.controller');

router.post('/placeOrder', OrderCtrl.apiPlaceOrder);
router.get('/deliveryAddresses', OrderCtrl.apiGetDeliveryAddresses);
router.post('/addDeliveryAddress', OrderCtrl.apiAddDeliveryAddresses);

module.exports = router;