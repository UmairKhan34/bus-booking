const { models } = require("./index");
module.exports = {
  createUser: async (body) => {
    try {
      const user = await models.users.create({ ...body });
      return {
        response: user,
      };
    } catch (error) {
      console.log("Error in creating users ", error);
      return {
        error: error,
      };
    }
  },
  getAllUsers: async () => {
    try {
      const users = await models.users.findAll({
        attributes: {
          exclude: ["createdAt", "updatedAt", "deletedAt"],
        },
      });
      return {
        response: users,
      };
    } catch (error) {
      console.log("Error in getting all users", error);
      return {
        error: error,
      };
    }
  },
};
