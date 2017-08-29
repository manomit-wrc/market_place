'use strict';
module.exports = function(sequelize, DataTypes) {
  var Testimonial = sequelize.define('testimonial', {
    ClientName: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: 
      { notEmpty: 
        {
          args: true,
          msg: 'Client name can not be blank!'
        },
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: 
      { notEmpty: 
        {
          args: true,
          msg: 'Description can not be blank!'
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
  return Testimonial;
};