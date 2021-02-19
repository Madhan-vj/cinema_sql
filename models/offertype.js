'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OfferType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      OfferType.hasMany(models.Offer,{foreignKey:'offerTypeId',as:'offerType'});
    }
  };
  OfferType.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'OfferType',
  });
  return OfferType;
};