const Joi = require("joi");

module.exports = {
  createTripSchema: async (req, res, next) => {
    const createTrip = Joi.object({
      busId: Joi.string().required(),
      routeId: Joi.string().required(),
      tripDeparture: Joi.date().required(),
      tripArrival: Joi.date().required(),
      tripFare: Joi.string().required(),
    });
    try {
      await createTrip.validateAsync(req.body);
      next();
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },
};
