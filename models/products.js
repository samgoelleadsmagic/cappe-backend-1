module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define(
    "products",
    {
      productID: {
        type: Sequelize.STRING,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "",
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "",
      },
      price: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0.0,
      },
      picture: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "",
      },
      brand: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "",
      },
    },
    {
      tablename: "tb_products",
    }
  );

  return Product;
};
