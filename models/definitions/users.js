const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/dbConnection");
const { v4: uuid } = require("uuid");
const { hash } = require("bcryptjs");
class users extends Model {}
users.init(
  {
    userId: {
      type: DataTypes.STRING(60),
      primaryKey: true,
    },
    userName: {
      type: DataTypes.STRING(34),
      unique: true,
      allowNull: false,
    },
    userEmail: {
      type: DataTypes.STRING(34),
      unique: true,
      allowNull: false,
    },
    userPhoneNumber: {
      type: DataTypes.STRING(34),
      unique: true,
      allowNull: false,
    },
    userPassword: {
      type: DataTypes.STRING(256),
      unique: false,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    modelName: "users",
    sequelize,
  }
);
users.beforeCreate(async (user) => {
  user.userId = uuid();
  user.userPassword = await hash(user.userPassword, 10);
});
//to remove password from response in postman after creating the user
users.afterCreate(async (user) => {
  delete user.dataValues.userPassword;
});
module.exports = users;
