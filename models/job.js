'use strict';
module.exports = function(sequelize, DataTypes) {
  var job = sequelize.define('job', {
    jobscategory_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    budget: DataTypes.STRING,
    no_of_applicant: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    user_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return job;
};