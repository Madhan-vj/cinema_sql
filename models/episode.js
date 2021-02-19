'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Episode extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Episode.belongsTo(models.Season, {foreignKey: 'seasonId'});
      Episode.belongsTo(models.Content, {foreignKey: 'contentId'});
      Episode.belongsTo(models.Video, {foreignKey: 'videoId'});
    }
  };
  Episode.init({
    name: DataTypes.STRING,
    seasonId: DataTypes.INTEGER,
    contentId: DataTypes.INTEGER,
    videoId: DataTypes.INTEGER,
    isAlwaysFree: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Episode',
  });
  return Episode;
};