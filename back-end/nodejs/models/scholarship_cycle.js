'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Scholarship_Cycle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Scholarship_Cycle.init({
    scholorship_id: DataTypes.INTEGER,
    cycle: DataTypes.STRING,
    start_date: DataTypes.DATEONLY,
    deadline: DataTypes.DATEONLY,
    results: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Scholorship_Cycle',
  });
  return Scholarship_Cycle;
};