'use strict';
module.exports = function(sequelize, DataTypes) {
  var Team = sequelize.define('team', {
    name: {
      type: DataTypes.STRING
    },
    image: {
      type: DataTypes.STRING
    },
     description: {
      type: DataTypes.TEXT
    },
    designation: DataTypes.STRING,   
    facebook: DataTypes.STRING,
    linkedin: DataTypes.STRING,
    twitter: DataTypes.STRING,
    google_plus: DataTypes.STRING,
    status: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Team;
};