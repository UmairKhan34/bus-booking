const { createUser, getAllUsers } = require("../models/userModels");
const responseHandler = require("../responseHandler");
module.exports = {
  create: async (req, res) => {
    try {
      const user = await createUser(req.body);
      responseHandler(user, res);
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
  getAll: async (req, res) => {
    try {
      const users = await getAllUsers();
      responseHandler(users, res);
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
};
