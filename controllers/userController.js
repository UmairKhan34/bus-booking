const {
  createUser,
  getAllUsers,
  deleteUser,
  profileUser,
} = require("../models/userModels");
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
      req.query.offset = (req.query.pageNo - 1) * req.query.limit;
      const users = await getAllUsers(req.query);
      responseHandler(users, res);
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
  deleteUser: async (req, res) => {
    try {
      const user = await deleteUser(req.query);
      responseHandler(user, res);
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
  getProfile: async (req, res) => {
    try {
      const userProfile = await profileUser(req.user);
      responseHandler(userProfile, res);
    } catch (error) {}
  },
};
