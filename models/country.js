'use strict';
module.exports = function(sequelize, DataTypes) {
  var country = sequelize.define('country', {
    code: DataTypes.STRING,
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return country;
};