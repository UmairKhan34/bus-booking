const { models } = require("./index");
module.exports = {
  createTrip: async (body) => {
    try {
      const trip = await models.trips.create({ ...body });
      return {
        response: trip,
      };
    } catch (error) {
      console.log("Error in creating trip ", error);
      return {
        error: error,
      };
    }
  },
  getAllTrips: async () => {
    try {
      const trips = await models.trips.findAll({
        attributes: {
          exclude: ["updatedAt", "deletedAt"],
        },
      });
      return {
        response: trips,
      };
    } catch (error) {
      console.log("Error in getting all trips", error);
      return {
        error: error,
      };
    }
  },
};
