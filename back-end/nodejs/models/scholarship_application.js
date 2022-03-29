'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Scholarship_Application extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Scholarship_Application.init({
    user_id: DataTypes.INTEGER,
    cycle_id: DataTypes.INTEGER,
    accepted: DataTypes.BOOLEAN,
    amount: DataTypes.INTEGER,
    currency: DataTypes.STRING,
    degree: DataTypes.STRING,
    major: DataTypes.STRING,
    semester_tuition_fee: DataTypes.INTEGER,
    monthly_allowance: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Scholarship_Application',
  });
  return Scholarship_Application;
};