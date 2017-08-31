'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return [
       queryInterface.addColumn(
         'jobcategories',
         'short_desc',
         {
           type: Sequelize.STRING(150),
           after: 'image'
           
         }
       ),
       queryInterface.addColumn(
         'jobcategories',
         'background_image',
         {
           type: Sequelize.STRING(150),
           after: 'short_desc'
           
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
