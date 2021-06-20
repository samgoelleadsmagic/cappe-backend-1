const  express =  require("express");
const router = express.Router();
const ProductCtrl = require('../controllers/product.controller');


router.get("/", ProductCtrl.apiGetAllProducts);


module.exports =  router;