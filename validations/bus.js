const Joi = require("joi");

module.exports = {
  createBusSchema: async (req, res, next) => {
    const createBus = Joi.object({
      busNumber: Joi.string().min(3).max(150).required(),
      busType: Joi.string().required(),
      busTotalSeats: Joi.number().required(),
    });
    try {
      await createBus.validateAsync(req.body);
      next();
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },
};
