const Joi = require("joi");

module.exports = {
  createRouteSchema: async (req, res, next) => {
    const createBus = Joi.object({
      routeCity: Joi.string().required(),
      routeDestination: Joi.string().required(),
      routeDistance: Joi.string().required(),
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
