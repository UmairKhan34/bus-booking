const { v4: uuid } = require("uuid");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("routes", [
      {
        routeId: uuid(),
        routeCity: "Multan",
        routeDestination: "shukkur",
        routeDistance: "28km",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
};
