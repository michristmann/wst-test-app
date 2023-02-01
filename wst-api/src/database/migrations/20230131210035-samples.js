'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('samples', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      city: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      state: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ph: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      conductivity: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      turbidity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      dbo: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      dqo: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      fe: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      mg: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      ca: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('samples');
  },
};
