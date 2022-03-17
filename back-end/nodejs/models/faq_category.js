'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Faq_Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Faq_Category.init({
    category: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Faq_Category',
  });
  return Faq_Category;
};