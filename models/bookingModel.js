const { models } = require("./index");
module.exports = {
  createBooking: async (body) => {
    try {
      const booking = await models.bookings.create({ ...body });
      return {
        response: booking,
      };
    } catch (error) {
      console.log("Error in creating booking ", error);
      return {
        error: error,
      };
    }
  },
  getAllBooking: async () => {
    try {
      const booking = await models.bookings.findAll({
        attributes: {
          exclude: ["updatedAt", "deletedAt", "userid", "tripId"],
        },
        include: [
          {
            model: models.users,
            attributes: ["userId", "userName", "userEmail", "userPhoneNumber"],
          },
          {
            model: models.trips,
            attributes: [
              "tripId",
              "busId",
              "routeId",
              "tripDeparture",
              "tripArrival",
              "tripFare",
            ],
          },
        ],
      });
      return {
        response: booking,
      };
    } catch (error) {
      console.log("Error in getting all bookings", error);
      return {
        error: error,
      };
    }
  },
};
