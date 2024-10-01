var routes = require("express").Router();
const protected = require("../middleware");
const {
  create,
  getAll,
  deleteUser,
  getProfile,
} = require("../controllers/userController");
const { createUserSchema, deleteUserSchema } = require("../validations/user");

routes.get("/get-all-users", protected, getAll);
routes.get("/get-profile", protected, getProfile);
routes.post("/create-users", createUserSchema, create);
routes.delete("/delete-users", deleteUserSchema, deleteUser);
module.exports = routes;
