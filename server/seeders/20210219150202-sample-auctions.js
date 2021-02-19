"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Auctions",
      [
        {
          car_id: 1,
          started_at: new Date().getTime(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          car_id: 2,
          started_at: new Date().getTime(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          car_id: 3,
          started_at: new Date().getTime(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          car_id: 4,
          started_at: new Date().getTime(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          car_id: 5,
          started_at: new Date().getTime(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
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
    queryInterface.bulkDelete("Auctions", null, {});
  },
};
