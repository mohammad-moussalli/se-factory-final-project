'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student_Buddy_Application extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Student_Buddy_Application.init({
    user_id: DataTypes.INTEGER,
    degree: DataTypes.STRING,
    major: DataTypes.STRING,
    field: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Student_Buddy_Application',
  });
  return Student_Buddy_Application;
};