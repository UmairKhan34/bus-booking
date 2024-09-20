var routes = require("express").Router();
const { create, getAll } = require("../controllers/userController");
const { createUserSchema } = require("../validations/user");

routes.get("/get-all-users", getAll);
routes.post("/create-users", createUserSchema, create);
module.exports = routes;
