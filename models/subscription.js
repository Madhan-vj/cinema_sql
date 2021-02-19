'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Subscription extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Subscription.belongsTo(models.SubscriptionType,{foreignKey:'SubcriptionTypeId',as:'SubcriptionType'});
      Subscription.belongsToMany(models.Content,{through:'SubscriptionContents',foreignKey:'subscriptionId',as:'content'});
      Subscription.belongsToMany(models.Offer,{through:'SubscriptionOffers',foreignKey:'subscriptionId',as:'offer'});
      Subscription.hasMany(models.Customer,{foreignKey:'subscriptionId',as:'customer'});
    }
  };
  Subscription.init({
    name: DataTypes.STRING,
    SubcriptionTypeId: DataTypes.INTEGER,
    DurationInMonth: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Subscription',
  });
  return Subscription;
};