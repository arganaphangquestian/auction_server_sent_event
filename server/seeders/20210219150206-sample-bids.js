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
      "Bids",
      [
        // Auction 1
        {
          auction_id: 1,
          price: 205000000,
          user_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          auction_id: 1,
          price: 210000000,
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          auction_id: 1,
          price: 220000000,
          user_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Auction 3
        {
          auction_id: 3,
          price: 310000000,
          user_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          auction_id: 3,
          price: 320000000,
          user_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          auction_id: 3,
          price: 350000000,
          user_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Auction 4
        {
          auction_id: 4,
          price: 300500000,
          user_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Auction 5
        {
          auction_id: 5,
          price: 310000000,
          user_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          auction_id: 5,
          price: 320000000,
          user_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      [],
      [],
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
    queryInterface.bulkDelete("Bids", null, {});
  },
};
