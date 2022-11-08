'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('notes', {
      id: Sequelize.DataTypes.INTEGER,
      author: Sequelize.DataTypes.STRING,
      content: Sequelize.DataTypes.STRING,
      added: Sequelize.DataTypes.STRING
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('notes');
  }
};
