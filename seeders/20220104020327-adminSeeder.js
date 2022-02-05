"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Admin",
          email: "admin@gmail.com",
          password: "$2b$10$QowTwXpX4d2OKOMtgiByRuhhWbURUtQPW5fPeAt0jMJhGJIwMBcQO",
          isAdmin: true,
          createdAt : new Date(),
          updatedAt : new Date()
        },
        {
          name: "Admin2",
          email: "admin2@gmail.com",
          password: "$2b$10$QowTwXpX4d2OKOMtgiByRuhhWbURUtQPW5fPeAt0jMJhGJIwMBcQO",
          isAdmin: true,
          createdAt : new Date(),
          updatedAt : new Date()
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
