'use strict';
module.exports = function(sequelize, DataTypes) {
  var JobCategory = sequelize.define('JobCategory', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: 
      { notEmpty: 
        {
          args: true,
          msg: 'Please enter name'
        },
      }
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: 
      { notEmpty: 
        {
          args: true,
          msg: 'Please select status'
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
  return JobCategory;
};