'use strict';
module.exports = function(sequelize, DataTypes) {
  var work = sequelize.define('work', {
    image: DataTypes.STRING,
    video: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return work;
};