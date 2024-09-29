const { createBus, getAllBus } = require("../models/busModel");
const responseHandler = require("../responseHandler");
module.exports = {
  create: async (req, res) => {
    try {
      const bus = await createBus(req.body);
      responseHandler(bus, res);
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
  getAll: async (req, res) => {
    try {
      const buses = await getAllBus();
      responseHandler(buses, res);
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
};
