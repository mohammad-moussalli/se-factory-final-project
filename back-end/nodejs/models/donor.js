'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Donor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Donor.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    mobile_phone: DataTypes.STRING,
    amount_donated: DataTypes.INTEGER,
    currency: DataTypes.STRING,
    nationality: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Donor',
  });
  return Donor;
};