'use strict';
module.exports = function(sequelize, DataTypes) {
  var JobCategory = sequelize.define('jobcategory', {
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
    short_desc: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: 
      { notEmpty: 
        {
          args: true,
          msg: 'Please enter short description'
        },
      }
    },
    background_image: {
      type: DataTypes.STRING,
      // allowNull: false,
      // validate: 
      // { notEmpty: 
      //   {
      //     args: true,
      //     msg: 'Please select image'
      //   },
      // }
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