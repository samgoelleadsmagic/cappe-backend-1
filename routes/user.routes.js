const  express =  require("express");
const router = express.Router();
const UserCtrl = require('../controllers/user.controller');


router.get("/", UserCtrl.apiGetAllUsers);
router.post("/", UserCtrl.apiCreateUser);
router.post('/checkAuth', UserCtrl.apiCheckIDToken);


module.exports =  router;