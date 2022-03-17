'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mentor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Mentor.init({
    user_id: DataTypes.INTEGER,
    job: DataTypes.STRING,
    job_country: DataTypes.STRING,
    job_city: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Mentor',
  });
  return Mentor;
};