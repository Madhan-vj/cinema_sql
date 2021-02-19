'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Customer.belongsTo(models.Subscription,{foreignKey:'subscriptionId',as:'subscription'});
      Customer.belongsToMany(models.Video,{through:'Purchases',foreignKey:'customerId',as:'video'});
    }
  };
  Customer.init({
    name: DataTypes.STRING,
    subscriptionId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Customer',
  });
  return Customer;
};