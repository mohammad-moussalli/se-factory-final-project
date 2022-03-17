'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    user_type_id: DataTypes.INTEGER,
    university_id: DataTypes.INTEGER,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    dob: DataTypes.DATEONLY,
    country_code: DataTypes.STRING,
    mobile_phone: DataTypes.STRING,
    sex: DataTypes.STRING,
    country: DataTypes.STRING,
    city: DataTypes.STRING,
    nationality: DataTypes.STRING,
    profile_picture: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};