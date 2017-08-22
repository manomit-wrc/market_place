'use strict';
module.exports = function(sequelize, DataTypes) {
  var Cms = sequelize.define('Cms', {
    slag: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: 
      { notEmpty: 
        {
          args: true,
          msg: 'Please enter slag'
        },
      }
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: 
      { notEmpty: 
        {
          args: true,
          msg: 'Please enter title'
        },
      }
    },
    short_description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: 
      { notEmpty: 
        {
          args: true,
          msg: 'Please enter short description'
        },
      }
    },
    full_description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: 
      { notEmpty: 
        {
          args: true,
          msg: 'Please enter name'
        },
      }
    }    
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Cms;
};