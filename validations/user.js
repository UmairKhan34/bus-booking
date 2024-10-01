const Joi = require("joi");

module.exports = {
  createUserSchema: async (req, res, next) => {
    const createUser = Joi.object({
      userName: Joi.string().min(3).max(34).required(),
      userPassword: Joi.string()
        .pattern(new RegExp("^[a-zA-Z0-9]{6,30}$"))
        .required(),
      userEmail: Joi.string().email().required(),
      userPhoneNumber: Joi.string().max(12).required(),
    });
    try {
      await createUser.validateAsync(req.body);
      next();
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },
  getAllUserSchema: async (req, res, next) => {
    const getAllUsers = Joi.object({
      pageNo: Joi.number().required(),
      limit: Joi.number().valid(2, 6).required(),
      orderWith: Joi.string().valid("userName", "userPhoneNumber", "userEmail"),
      orderBy: Joi.string().valid("ASC", "DESC"),
    });
    try {
      await createUser.validateAsync(req.body);
      next();
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },
  deleteUserSchema: async (req, res, next) => {
    const user = Joi.object({
      userId: Joi.string(),
      userName: Joi.string(),
    });
    try {
      await user.validateAsync(req.body);
      next();
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },
  loginUserSchema: async (req, res, next) => {
    const loginUser = Joi.object({
      userName: Joi.string().min(3).max(34).required(),
      userPassword: Joi.string()
        .pattern(new RegExp("^[a-zA-Z0-9]{6,30}$"))
        .required(),
    });
    try {
      await loginUser.validateAsync(req.body);
      next();
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },
};
