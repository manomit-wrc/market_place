'use strict';
module.exports = function(sequelize, DataTypes) {
  var Organization = sequelize.define('organization', {
    address: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: 
      { notEmpty: 
        {
          args: true,
          msg: 'Enter address'
        },
      }
    },
    contact_no: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate:{
        notEmpty:{
          args:true,
          msg: 'Enter contact number'
        },
        isNumeric:{
          args: true,
          msg: 'Contact number must be numeric'
        },
        len: {
          args: [10,10],
          msg: 'Contact number must have 10 digits'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      validate:{
        notEmpty:{
          args:true,
          msg:'Enter email'
        }
      }
    },
    facebook: {
      type: DataTypes.STRING,
      allowNull: true,
      validate:{
        notEmpty:{
          args:true,
          msg:'Enter facebook id'
        }
      }
    },
    twitter: {
      type: DataTypes.STRING,
      allowNull: true,
      validate:{
        notEmpty:{
          args:true,
          msg:'Enter twitter id'
        }
      }
    },
    linkedin: {
      type: DataTypes.STRING,
      allowNull: true,
      validate:{
        notEmpty:{
          args: true,
          msg: 'Enter linkedin id'
        }
      }
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true,
      validate:{
        notEmpty:{
          args: true,
          msg: 'Enter title'
        }
      }
    },
    meta_key: {
      type: DataTypes.STRING,
      allowNull: true,
      validate:{
        notEmpty:{
          args: true,
          msg: 'Enter meta key'
        }
      }
    },
    meta_description: {
      type: DataTypes.STRING,
      allowNull: true,
      validate:{
        notEmpty:{
          args: true,
          msg: 'Enter meta description'
        }
      }
    },
    client: {
      type: DataTypes.STRING,
      allowNull: true,
      validate:{
        notEmpty:{
          args: true,
          msg: 'Enter total client'
        }
      }
    },
    freelancers: {
      type: DataTypes.STRING,
      allowNull: true,
      validate:{
        notEmpty:{
          args: true,
          msg: 'Enter total freelancers'
        }
      }
    },
    jobs_completed: {
      type: DataTypes.STRING,
      allowNull: true,
      validate:{
        notEmpty:{
          args: true,
          msg: 'Enter total jobs completed'
        }
      }
    },
    payed_to_freelancers: {
      type: DataTypes.STRING,
      allowNull: true,
      validate:{
        notEmpty:{
          args: true,
          msg: 'Enter payed to freelancers'
        }
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Organization;
};