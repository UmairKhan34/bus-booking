const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/dbConnection");
const { v4: uuid } = require("uuid");
class routes extends Model {}
routes.init(
  {
    routeId: {
      type: DataTypes.STRING(60),
      primaryKey: true,
    },
    routeCity: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    routeDestination: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    routeDistance: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  },
  {
    timestamps: true,
    modelName: "routes",
    sequelize,
  }
);
routes.beforeCreate(async (user) => {
  user.userId = uuid();
});

module.exports = routes;
