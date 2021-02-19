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
      "Users",
      [
        {
          name: "John Doe",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Arga",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Doni",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Markono",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jhony",
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
    queryInterface.bulkDelete("Users", null, {});
  },
};
