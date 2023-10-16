'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AdressUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AdressUser.init(
    {
      idUser: DataTypes.INTEGER,
      idAdress: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'AdressUser',
    }
  );
  return AdressUser;
};
