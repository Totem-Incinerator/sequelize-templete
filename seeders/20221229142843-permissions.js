'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('permissions', [
      {
        permission_name: "read",
        createdAt: new Date()
      },
      {
        permission_name: "create",
        createdAt: new Date()
      },
      {
        permission_name: "update",
        createdAt: new Date()
      },
      {
        permission_name: "delete",
        createdAt: new Date()
      }
    ], {})

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('permissions', null, {});
  }
};
