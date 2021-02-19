'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SubscriptionContent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      SubscriptionContent.belongsTo(models.Content, {foreignKey: 'contentId'});
      SubscriptionContent.belongsTo(models.Subscription, {foreignKey: 'subscriptionId'});
    }
  };
  SubscriptionContent.init({
    contentId: DataTypes.INTEGER,
    subscriptionId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'SubscriptionContent',
  });
  return SubscriptionContent;
};