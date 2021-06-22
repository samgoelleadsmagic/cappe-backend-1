module.exports = (sequelize, Sequelize) => {
  const Category = sequelize.define(
    "categories",
    {
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
        unique: true
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
