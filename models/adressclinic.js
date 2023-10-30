'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AdressClinic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AdressClinic.init({
    idClinic: DataTypes.INTEGER,
    idAdress: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'AdressClinic',
  });
  return AdressClinic;
};