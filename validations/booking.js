const Joi = require("joi");

module.exports = {
  createBookingSchema: async (req, res, next) => {
    const booking = Joi.object({
      userId: Joi.string().required(),
      tripId: Joi.string().required(),
      bookingTime: Joi.date().required(),
      bookingSeat: Joi.string().required(),
      bookingFare: Joi.string().required(),
      bookingStatus: Joi.valid("Confirmed", "Cancelled", "Pending").required(),
    });
    try {
      await booking.validateAsync(req.body);
      next();
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },
};
