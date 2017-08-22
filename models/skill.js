'use strict';
module.exports = function(sequelize, DataTypes) {
  var Skill = sequelize.define('Skill', {
    name: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Skill;
};