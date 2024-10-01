const { response } = require("../app");
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
  getAllUsers: async (query) => {
    try {
      const users = await models.users.findAll({
        attributes: {
          exclude: ["createdAt", "updatedAt", "deletedAt"],
        },
        order: [
          [
            query.orderWith ? query.orderWith : "userName",
            query.orderBy ? query.orderBy : "ASC",
          ],
        ],
        offset: query.offset,
        limit: query.limit,
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
  deleteUser: async ({ userId, userName }) => {
    try {
      const user = await models.users.destroy({
        where: { ...(userId ? { userId: userId } : { userName: userName }) },
      });
      return {
        response: user,
      };
    } catch (error) {
      console.log("Error in getting all users", error);
      return {
        error: error,
      };
    }
  },
  getUser: async ({ userId, userName }) => {
    try {
      const users = await models.users.findOne({
        where: {
          ...(userId ? { userId: userId } : { userName: userName }),
        },
      });
      return {
        response: users,
      };
    } catch (error) {
      console.log(error);
      return {
        error: error,
      };
    }
  },
  updateUser: async ({ userId, ...body }) => {
    try {
      const user = await models.users.update(
        {
          ...body,
        },
        {
          where: {
            userId: userId,
          },
        }
      );
      return {
        response: user,
      };
    } catch (error) {
      console.log(error);
      return {
        error: error,
      };
    }
  },
  profileUser: async ({ userId }) => {
    try {
      const user = await models.users.findOne({
        where: {
          userId: userId,
        },
        attributes: {
          exclude: ["Userpassword"],
        },
      });
      return {
        response: user,
      };
    } catch (error) {
      console.log(error);
      return {
        error: error,
      };
    }
  },
};
