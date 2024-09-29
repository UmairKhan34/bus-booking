var routes = require("express").Router();
const { create, getAll } = require("../controllers/busController");
const { createBusSchema } = require("../validations/bus");

routes.get("/get-all-buses", getAll);
routes.post("/create-bus", createBusSchema, create);
module.exports = routes;
