var routes = require("express").Router();
const { create, getAll } = require("../controllers/tripController");
const { createTripSchema } = require("../validations/trip");

routes.get("/get-all-trips", getAll);
routes.post("/create-trip", createTripSchema, create);
module.exports = routes;
