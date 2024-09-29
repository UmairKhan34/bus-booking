const { createTrip, getAllTrips } = require("../models/tripModel");
const responseHandler = require("../responseHandler");
module.exports = {
  create: async (req, res) => {
    try {
      const trip = await createTrip(req.body);
      responseHandler(trip, res);
    } catch (error) {
      console.log("Message in error", error);
      return res.send({
        error: error,
      });
    }
  },
  getAll: async (req, res) => {
    try {
      const trips = await getAllTrips();
      responseHandler(trips, res);
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
};
