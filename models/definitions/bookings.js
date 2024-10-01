const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/dbConnection");
const { v4: uuid } = require("uuid");
const { trips } = require("./trips");
const { users } = require("./users");

class bookings extends Model {}
bookings.init(
  {
    bookingId: {
      type: DataTypes.STRING(60),
      primaryKey: true,
    },
    userId: {
      type: DataTypes.STRING(255),
      allowNull: false,
      references: {
        model: users,
        key: "userId",
      },
    },
    tripId: {
      type: DataTypes.STRING(255),
      allowNull: false,
      references: {
        model: trips,
        key: "tripId",
      },
    },
    bookingTime: {
      type: DataTypes.DATE(),
      allowNull: false,
    },
    bookingSeat: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: false,
    },
    bookingFare: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    bookingStatus: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
  },
  {
    timestamps: true,
    modelName: "bookings",
    sequelize,
  }
);
bookings.beforeCreate(async (booking) => {
  booking.bookingId = uuid();
});

module.exports = bookings;
