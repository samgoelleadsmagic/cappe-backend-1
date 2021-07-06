const dbConfig = require("../config/db.config");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user.js")(sequelize, Sequelize);
db.product = require("./products.js")(sequelize, Sequelize);
db.category = require("./product_categories.js")(sequelize, Sequelize);
db.cart = require('./cart.js')(sequelize, Sequelize);

// db.category.hasMany(db.product, {
//   foreign_key: { allowNull: false },
//   onDelete: "CASCADE",
// });
db.sequelize.sync();

module.exports = db;
