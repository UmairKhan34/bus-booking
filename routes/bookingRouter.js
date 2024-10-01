var routes = require("express").Router();
const { create, getAll } = require("../controllers/bookingController");
const { createBookingSchema } = require("../validations/booking");

routes.get("/get-all-booking", getAll);
routes.post("/create-booking", createBookingSchema, create);
module.exports = routes;
