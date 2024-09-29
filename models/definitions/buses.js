const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/dbConnection");
const { v4: uuid } = require("uuid");
class Buses extends Model {}
Buses.init(
  {
    busId: {
      type: DataTypes.STRING(60),
      primaryKey: true,
    },
    busNumber: {
      type: DataTypes.STRING(256),
      allowNull: false,
      unique: true,
    },

    busType: {
      type: DataTypes.STRING(256),
      allowNull: false,
    },

    busTotalSeats: {
      type: DataTypes.STRING(80),
      allowNull: false,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    modelName: "Buses",
    sequelize,
  }
);
Buses.beforeCreate(async (bus) => {
  bus.busId = uuid();
});
module.exports = Buses;
