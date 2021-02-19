'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SubscriptionOffer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      SubscriptionOffer.belongsTo(models.Subscription, {foreignKey: 'subscriptionId'});
      SubscriptionOffer.belongsTo(models.Offer, {foreignKey: 'offerId'});
    }
  };
  SubscriptionOffer.init({
    subscriptionId: DataTypes.INTEGER,
    offerId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'SubscriptionOffer',
  });
  return SubscriptionOffer;
};