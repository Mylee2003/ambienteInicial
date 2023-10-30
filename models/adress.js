'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Adress extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Adress.belongsToMany(models.User, {
        through: 'AdressUser',
        foreignKey: 'idAdress',
      });

      Adress.belongsToMany(models.Clinic, {
        through: 'AdressClinic',
        foreignKey: 'idClinic',
      });

    }
  }

  Adress.init(
    {
      cep: DataTypes.INTEGER,
      uf: DataTypes.STRING,
      bairro: DataTypes.STRING,
      municipio: DataTypes.STRING,
      logradouro: DataTypes.STRING,
      numero: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Adress',
    }
  );
  return Adress;
};
