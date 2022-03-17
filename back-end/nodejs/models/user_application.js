'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_Application extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User_Application.init({
    user_id: DataTypes.INTEGER,
    cycle_id: DataTypes.INTEGER,
    scholorship_id: DataTypes.INTEGER,
    accepted: DataTypes.BOOLEAN,
    amount: DataTypes.INTEGER,
    currency: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User_Application',
  });
  return User_Application;
};