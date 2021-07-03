require("dotenv").config();
//const articles = require("./routes/article.routes");
const express = require("express");
console.log(process.env);
const routerUser = require('./routes/user.routes.js');
const routerProduct = require('./routes/product.routes.js');
const routerCart = require('./routes/cart.routes');
const app = express();
const port = process.env.PORT || 8080;
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const cors = require('cors')

const swaggerOptions = {
  swaggerDefinition :{
    info:{
      title: 'Cappey API',
      description: 'Cappey Backend API DOC',
      servers: ['http://localhost:8080']
    }
  },
  apis: ['./routes/*.js']
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use(cors());
app.use('/api-docs',swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/user', routerUser);
app.use('/product', routerProduct);
app.use('/cart', routerCart);


const db = require('./models/index');
const swaggerJSDoc = require("swagger-jsdoc");

db.sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });



// app.get("/", (req, res) => {
//   res.send(`<h1>Hello!</h1>`);
// });

app.listen(port, () => {
  console.log(`Application is listening at port ${port}`);
});
