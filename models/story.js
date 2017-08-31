'use strict';
module.exports = function(sequelize, DataTypes) {
  var story = sequelize.define('story', {
    published_date: DataTypes.DATE,
    description: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return story;
};