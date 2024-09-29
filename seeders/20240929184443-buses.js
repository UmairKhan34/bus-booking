const { v4: uuid } = require("uuid");
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Buses", [
      {
        busId: uuid(),
        busNumber: "25500",
        busType: "AC",
        busTotalSeats: "28",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
};
