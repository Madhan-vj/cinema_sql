'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SubscriptionType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      SubscriptionType.hasMany(models.Subscription,{foreignKey:'SubcriptionTypeId',as:'subscription'});
    }
  };
  SubscriptionType.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'SubscriptionType',
  });
  return SubscriptionType;
};