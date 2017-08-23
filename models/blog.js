'use strict';
module.exports = function(sequelize, DataTypes) {
  var Blog = sequelize.define('Blog', {   
    blog_name: {
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
  blog_category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: 
      { notEmpty: 
        {
          args: true,
          msg: 'Please select blog category'
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
    long_description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: 
      { notEmpty: 
        {
          args: true,
          msg: 'Please enter long description'
        },
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        blog.belongsTo(models.BlogCategory, { foreignKey: 'blog_category_id'} );
      }
    }
  });
  return Blog;
};