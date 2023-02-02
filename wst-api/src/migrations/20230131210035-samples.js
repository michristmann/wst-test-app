'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('samples', {
      id: {
        type: Sequelize.DataTypes.UUID,
        defaultValue: Sequelize.DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
      },
      cidade: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      estado: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ph: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      condutividade: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      turbidez: {
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
