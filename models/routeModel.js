const { models } = require("./index");
module.exports = {
  createRoute: async (body) => {
    try {
      const route = await models.routes.create({ ...body });
      return {
        response: bus,
      };
    } catch (error) {
      console.log("Error in route Bus ", error);
      return {
        error: error,
      };
    }
  },
  getAllRoutes: async () => {
    try {
      const route = await models.buses.findAll({
        attributes: {
          exclude: ["deletedAt"],
        },
      });
      return {
        response: route,
      };
    } catch (error) {
      console.log("Error in getting all routes", error);
      return {
        error: error,
      };
    }
  },
};
