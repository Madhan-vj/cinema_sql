'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Offer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Offer.belongsTo(models.OfferType,{foreignKey:'offerTypeId',as:'OfferType'});
      Offer.belongsToMany(models.Subscription,{through:'SubscriptionOffers',foreignKey:'offerId',as:'subscription'});
    }
  };
  Offer.init({
    name: DataTypes.STRING,
    offerTypeId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Offer',
  });
  return Offer;
};