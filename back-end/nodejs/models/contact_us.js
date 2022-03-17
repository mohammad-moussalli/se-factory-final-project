'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Contact_Us extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Contact_Us.init({
    email: DataTypes.STRING,
    full_name: DataTypes.STRING,
    subject: DataTypes.STRING,
    messsage: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Contact_Us',
  });
  return Contact_Us;
};