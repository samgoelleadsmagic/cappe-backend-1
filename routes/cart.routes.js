const  express =  require("express");
const router = express.Router();
const CartCtrl = require('../controllers/cart.controller');

router.post('/addItemToCart', CartCtrl.apiAddItemToCart);
router.put('/reduceItemQuantity', CartCtrl.apireduceItemQuantity);
router.get('/getCartItems', CartCtrl.apiGetCartItems);

module.exports = router;