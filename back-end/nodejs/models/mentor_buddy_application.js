'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mentor_Buddy_Application extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Mentor_Buddy_Application.init({
    user_id: DataTypes.INTEGER,
    degree: DataTypes.STRING,
    major: DataTypes.STRING,
    study_field: DataTypes.STRING,
    work_field: DataTypes.STRING,
    company: DataTypes.STRING,
    position: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Mentor_Buddy_Application',
  });
  return Mentor_Buddy_Application;
};