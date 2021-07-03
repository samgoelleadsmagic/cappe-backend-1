module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define(
    "user",
    {
      user_id: {
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
        type: Sequelize.STRING,
        allowNull: false,
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
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    },
    {
      tablename: "tb_user",
    }
  );

  return User;
};
