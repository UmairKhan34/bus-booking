const { models } = require("./index");
module.exports = {
  createBus: async (body) => {
    try {
      const bus = await models.buses.create({ ...body });
      return {
        response: bus,
      };
    } catch (error) {
      console.log("Error in creating Bus ", error);
      return {
        error: error,
      };
    }
  },
  getAllBus: async () => {
    try {
      const buses = await models.buses.findAll({
        attributes: {
          exclude: ["deletedAt"],
        },
      });
      return {
        response: buses,
      };
    } catch (error) {
      console.log("Error in getting all Buses", error);
      return {
        error: error,
      };
    }
  },
};
