'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return [
         queryInterface.addColumn(
           'banners',
           'banner_image',
           {
             type: Sequelize.STRING(150),
             after: 'description'
             
           }
         )
       ];
  },

  down: function (queryInterface, Sequelize) {
    return [
         queryInterface.removeColumn('banners', 'banner_image')
       ];
  }
};
