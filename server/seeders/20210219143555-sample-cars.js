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
      "Cars",
      [
        {
          name: "Toyota Camry 2.0",
          year: 2015,
          price: 200000000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Honda Jazz",
          year: 2016,
          price: 100000000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Honda CRV 1.5",
          year: 2018,
          price: 300000000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Toyota Innova 1.5 G",
          year: 2019,
          price: 380000000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mitsubishi Expander 2.0",
          year: 2017,
          price: 300000000,
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
    queryInterface.bulkDelete("Cars", null, {});
  },
};
