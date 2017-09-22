'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return [
       queryInterface.addColumn(
         'users',
         'country_id',
         {
           type: Sequelize.STRING(11),
           after: 'address'
           
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
