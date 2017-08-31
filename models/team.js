'use strict';
module.exports = function(sequelize, DataTypes) {
  var Team = sequelize.define('team', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: 
      { notEmpty: 
        {
          args: true,
          msg: 'Please enter blog name'
        },
      }
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: 
      { notEmpty: 
        {
          args: true,
          msg: 'Please enter image'
        },
      }
    },
     description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: 
      { notEmpty: 
        {
          args: true,
          msg: 'Please enter description'
        },
      }
    },   
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