var routes = require("express").Router();
const { login } = require("../controllers/authController");
const { loginUserSchema } = require("../validations/user");

routes.post("/login", loginUserSchema, login);

module.exports = routes;
