module.exports = (sequelize, Sequelize) => {
  const cart_Item = sequelize.define(
    "cart_item",
    {
      productID: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      userID: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
    },
    {
      tablename: "tb_cart_Item",
    }
  );

  return cart_Item;
};
