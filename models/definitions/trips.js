const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/dbConnection");
const { Buses } = require("./buses");
const { routes } = require("./routes");
const { v4: uuid } = require("uuid");

class trips extends Model {}

trips.init(
  {
    tripId: {
      type: DataTypes.STRING(60),
      primaryKey: true,
    },
    busId: {
      type: DataTypes.STRING(255),
      allowNull: false,
      references: {
        model: Buses,
        key: "busId",
      },
    },
    routeId: {
      type: DataTypes.STRING(255),
      allowNull: false,
      references: {
        model: routes,
        key: "routeId",
      },
    },
    tripDeparture: {
      type: DataTypes.DATE(),
      allowNull: false,
    },
    tripArrival: {
      type: DataTypes.DATE(),
    },
    tripFare: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    timestamps: true,
    modelName: "trips",
    sequelize,
  }
);

trips.beforeCreate(async (trip) => {
  trip.tripId = uuid();
});

module.exports = trips;
