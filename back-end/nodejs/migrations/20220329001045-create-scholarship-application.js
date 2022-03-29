'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Scholarship_Applications', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      cycle_id: {
        type: Sequelize.INTEGER
      },
      scholarship_id: {
        type: Sequelize.INTEGER
      },
      accepted: {
        type: Sequelize.BOOLEAN
      },
      amount: {
        type: Sequelize.INTEGER
      },
      currency: {
        type: Sequelize.STRING
      },
      degree: {
        type: Sequelize.STRING
      },
      major: {
        type: Sequelize.STRING
      },
      semester_tuition_fee: {
        type: Sequelize.INTEGER
      },
      monthly_allowance: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Scholarship_Applications');
  }
};