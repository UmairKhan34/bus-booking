require("dotenv").config();
const { Sequelize } = require("sequelize");
const sequelize = new Sequelize({
  dialect: process.env.DB_DIALECT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
});
sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected succesfully");
  })
  .catch((error) => {
    console.log("Database not connected ", error);
  });
module.exports = sequelize;
