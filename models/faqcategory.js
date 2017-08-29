'use strict';
module.exports = function(sequelize, DataTypes) {
  var FaqCategory = sequelize.define('faqcategory', {
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
      type: DataTypes.INTEGER,
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
  return FaqCategory;
};