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
};
