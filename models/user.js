'use strict';
module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define('user', {
    fname: DataTypes.STRING,
    lname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    mobile_no: DataTypes.STRING,
    address: DataTypes.TEXT,
    country_id:DataTypes.INTEGER,
    state: DataTypes.STRING,
    city: DataTypes.STRING,
    pincode: DataTypes.STRING,
    image: DataTypes.STRING,
    type: DataTypes.STRING,
    status: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return user;
};