'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Blogs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      blog_name: {
        type: Sequelize.STRING
      },
      blog_category_id: {
        type: Sequelize.INTEGER
      },
      short_description: {
        type: Sequelize.TEXT
      },
      long_description: {
        type: Sequelize.TEXT
      },
      blog_image: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('Blogs');
  }
};