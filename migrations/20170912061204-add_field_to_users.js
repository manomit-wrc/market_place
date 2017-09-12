'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return [
       queryInterface.addColumn(
         'users',
         'type',
         {
           type: Sequelize.STRING(11),
           after: 'image'
           
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
