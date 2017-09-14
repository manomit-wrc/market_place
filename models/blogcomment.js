'use strict';
module.exports = function(sequelize, DataTypes) {
  var blogcomment = sequelize.define('blogcomment', {
    user_id: DataTypes.INTEGER,
    blog_id: DataTypes.INTEGER,
    blog_comment: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return blogcomment;
};