const  express =  require("express");
const router = express.Router();
const UserCtrl = require('../controllers/user.controller');


router.get("/", UserCtrl.apiGetAllUsers);
router.post("/", UserCtrl.apiCreateUser);
/**
 * @openapi
 * /checkAuth:
 *   post:
 *     requestBody:
        description: Optional description in *Markdown*
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/Pet'
          application/xml:
            schema:
              $ref: '#/components/schemas/Pet'
          application/x-www-form-urlencoded:
            schema:
              $ref: '#/components/schemas/PetForm'
          text/plain:
            schema:
              type: string
 *      
 *     responses:
 *       200:
 *         description: Check AuthToken of user.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: The user ID.
 *                         example: 0
 *                       name:
 *                         type: string
 *                         description: The user's name.
 *                         example: Leanne Graham
 */
router.post('/checkAuth', UserCtrl.apiCheckIDToken);


module.exports =  router;