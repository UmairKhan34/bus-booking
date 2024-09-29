const { createRoute, getAllRoutes } = require("../models/routeModel");
const responseHandler = require("../responseHandler");
module.exports = {
  createRoute: async (req, res) => {
    try {
      const route = await createRoute(req.body);
      responseHandler(route, res);
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
  getAllRoutes: async (req, res) => {
    try {
      const routes = await getAllRoutes();
      responseHandler(routes, res);
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
};
