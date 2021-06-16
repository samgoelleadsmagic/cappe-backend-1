require("dotenv").config();
//const articles = require("./routes/article.routes");
const express = require("express");

const router = require('./routes/user.routes.js');
const app = express();
const port = process.env.PORT || 8080;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', router);


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
