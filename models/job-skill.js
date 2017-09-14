'use strict';
module.exports = function(sequelize, DataTypes) {
  var job_skill = sequelize.define('job-skill', {
    job_id: DataTypes.INTEGER,
    skill_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return job_skill;
};