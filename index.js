require("dotenv").config();
//const articles = require("./routes/article.routes");
const express = require("express");

const routerUser = require('./routes/user.routes.js');
const routerProduct = require('./routes/product.routes.js');
const app = express();
const port = process.env.PORT || 8080;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/user', routerUser);
app.use('/product', routerProduct);


const db = require('./models/index');

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
