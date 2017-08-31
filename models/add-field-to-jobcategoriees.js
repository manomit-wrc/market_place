'use strict';
module.exports = function(sequelize, DataTypes) {
  var add - field - to - jobcategoriees = sequelize.define('add-field-to-jobcategoriees', {
    image: DataTypes.STRING,
    short_desc: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return add - field - to - jobcategoriees;
};