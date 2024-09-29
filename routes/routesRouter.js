var routes = require("express").Router();
const { createRoute, getAllRoutes } = require("../controllers/routeConttoller");
const { createRouteSchema } = require("../validations/route");

routes.get("/get-all-routes", getAllRoutes);
routes.post("/create-route", createRouteSchema, createRoute);
module.exports = routes;
