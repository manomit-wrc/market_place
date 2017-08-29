'use strict';
module.exports = function(sequelize, DataTypes) {
  var Banner = sequelize.define('Banner', {
    header_1: DataTypes.STRING,
    header_2: DataTypes.STRING,
    description: DataTypes.TEXT,
    banner_image: DataTypes.STRING,
    status: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Banner;
};