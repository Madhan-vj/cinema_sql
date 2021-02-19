'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Purchase extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Purchase.belongsTo(models.Customer, {foreignKey: 'customerId'});
      Purchase.belongsTo(models.Video, {foreignKey: 'videoId'});
    }
  };
  Purchase.init({
    customerId: DataTypes.INTEGER,
    videoId: DataTypes.INTEGER,
    expiredDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Purchase',
  });
  return Purchase;
};