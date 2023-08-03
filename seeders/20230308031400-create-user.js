'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Users', [{
      name: 'Juan',
      lastname: 'Romero',
      username: 'JRomero',
      email: 'juanromero@gmail.com',
      password: '1234',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

  },

  async down(queryInterface) {
    await queryInterface.dropTable('Users')
  }
};
