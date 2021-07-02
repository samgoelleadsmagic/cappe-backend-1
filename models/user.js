module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define(
    "user",
    {
      userID: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      first_name: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "",
      },
      last_name: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "",
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "",
      },
      phone: {
        type: Sequelize.BIGINT,
        allowNull: false
      },
      country: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "",
      },
      city: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "",
      },
      state: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "",
      },
      pincode: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      tablename: "tb_user",
    }
  );

  return User;
};
