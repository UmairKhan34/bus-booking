const { createBooking, getAllBooking } = require("../models/bookingModel");
const responseHandler = require("../responseHandler");
module.exports = {
  create: async (req, res) => {
    try {
      const bus = await createBooking(req.body);
      responseHandler(bus, res);
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
  getAll: async (req, res) => {
    try {
      const buses = await getAllBooking();
      responseHandler(buses, res);
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
};
