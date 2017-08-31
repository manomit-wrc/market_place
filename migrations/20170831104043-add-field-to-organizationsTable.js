'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return [queryInterface.addColumn(
      'organizations',
      'client',
      {
        type: Sequelize.STRING(255),after: 'meta_description'
      }
      ),
    queryInterface.addColumn(
      'organizations',
      'freelancers',
      {
      type: Sequelize.STRING(255),
      after: 'client'
    }
    ),
    queryInterface.addColumn(
      'organizations',
      'jobs_completed',
      {
      type: Sequelize.STRING(255),
      after: 'freelancers'
    }
    ),
    queryInterface.addColumn(
      'organizations',
      'payed_to_freelancers',
      {
      type: Sequelize.STRING(255),
      after: 'jobs_completed'
    }
    )
    ];
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
