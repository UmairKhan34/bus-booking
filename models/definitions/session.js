const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/dbConnection");
const { v4: uuid } = require("uuid");
const users = require("./users");
class sessions extends Model {}
sessions.init(
  {
    sessionId: {
      type: DataTypes.STRING(60),
      primaryKey: true,
    },
    sessionToken: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    userId: {
      unique: true,
      allowNull: false,
      type: DataTypes.STRING(),
      references: {
        model: users,
        key: "userId",
      },
    },
  },
  {
    timestamps: true,
    paranoid: true,
    modelName: "sessions",
    sequelize,
  }
);
module.exports = sessions;
