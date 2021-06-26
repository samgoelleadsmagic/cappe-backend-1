const  express =  require("express");
const router = express.Router();
const ProductCtrl = require('../controllers/product.controller');


router.post("/getProducts", ProductCtrl.apiGetAllProducts);
router.post("/add", ProductCtrl.apiAddProduct);

//push check
module.exports =  router;