const { getUser } = require("../models/userModels");
const responseHandler = require("../responseHandler");
const { compare } = require("bcryptjs");
const { sign } = require("jsonwebtoken");
module.exports = {
  login: async (req, res) => {
    try {
      const isUser = await getUser(req.body);
      if (isUser.error || !isUser.response) {
        isUser.error
          ? (isUser.error = "Invalid User")
          : (isUser.response = "Invalid User");
        res.cookie("auth", token);

        return responseHandler(isUser, res);
      }
      const { userPassword } = isUser.response.dataValues;
      const isValid = await compare(req.body.userPassword, userPassword);

      if (!isValid) {
        res.cookie("auth", "undefined");

        return responseHandler(
          {
            response: "Invalid credentials",
          },
          res
        );
      }
      const user = isUser.response.dataValues;

      delete user.userPassword;
      const token = sign(user, process.env.SECRET, {
        expiresIn: "1d",
      });
      res.cookie("auth", token);
      return responseHandler({ response: token }, res);
    } catch (error) {
      console.log(error);
      return res.send({
        error: error,
      });
    }
  },
};
