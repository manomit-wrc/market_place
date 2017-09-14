'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('jobs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(11)
      },
      jobscategory_id: {
        allowNull: false,
        type: Sequelize.INTEGER(11)
      },
      title: {
        allowNull: true,
        type: Sequelize.STRING(100)
      },
      budget: {
        allowNull: true,
        type: Sequelize.STRING(50)
      },
      no_of_applicant: {
        allowNull: true,
        type: Sequelize.INTEGER(100)
      },
      description: {
        allowNull: true,
        type: Sequelize.TEXT
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER(11)
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
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('jobs');
  }
};