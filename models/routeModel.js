const { models } = require("./index");
module.exports = {
  createRoute: async (body) => {
    try {
      const route = await models.routes.create({ ...body });
      return {
        response: route,
      };
    } catch (error) {
      console.log("Error in creating route  ", error);
      return {
        error: error,
      };
    }
  },
  getAllRoutes: async () => {
    try {
      const route = await models.routes.findAll({
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
