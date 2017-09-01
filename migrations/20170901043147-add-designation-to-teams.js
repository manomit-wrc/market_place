'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return [
       queryInterface.addColumn(
         'teams',
         'designation',
         {
           type: Sequelize.STRING(150),
           allowNull: true,
           after: 'image'
           
         }
       )
     ];
  },

  down: function (queryInterface, Sequelize) {
    return [
      queryInterface.removeColumn('teams', 'designation')
    ];
  }
};
