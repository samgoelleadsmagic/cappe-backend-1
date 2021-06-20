module.exports = (sequelize, Sequelize) => {
  const Category = sequelize.define(
    "categories",
    {
      categoryID: {
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
    },
    {
      tablename: "tb_categories",
    }
  );

  return Category;
};
