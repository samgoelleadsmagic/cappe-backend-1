const  express =  require("express");
const router = express.Router();
const CartCtrl = require('../controllers/cart.controller');

router.post('/addItemToCart', CartCtrl.apiAddItemToCart);

module.exports = router;