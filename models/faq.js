'use strict';
module.exports = function(sequelize, DataTypes) {
  var Faq = sequelize.define('faq', {
    faq_category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: 
      { notEmpty: 
        {
          args: true,
          msg: 'Please select faq category'
        },
      }
    },
    question: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: 
      { notEmpty: 
        {
          args: true,
          msg: 'Please enter question'
        },
      }
    },
    answer: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: 
      { notEmpty: 
        {
          args: true,
          msg: 'Please enter answer'
        },
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        Faq.belongsTo(models.FaqCategory, { foreignKey: 'faq_category_id'} );
      }
    }
  });
  return Faq;
};