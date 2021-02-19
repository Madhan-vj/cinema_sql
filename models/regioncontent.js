'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RegionContent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      RegionContent.belongsTo(models.Region, {foreignKey: 'regionId'});
      RegionContent.belongsTo(models.Content, {foreignKey: 'contentId'});
    }
  };
  RegionContent.init({
    regionId: DataTypes.INTEGER,
    contentId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'RegionContent',
  });
  return RegionContent;
};