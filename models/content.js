'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Content extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Content.belongsTo(models.ContentType,{foreignKey:'contentTypeId',as:'contentType'});
      Content.belongsToMany(models.Genre, {through: 'GenreContents', foreignKey: 'contentId', as: 'genre'});
      Content.belongsToMany(models.Region,{through:'RegionContents',foreignKey:'contentId',as:'region'});
      Content.hasMany(models.Movie,{foreignKey:'contentId',as:'movie'});
      Content.belongsToMany(models.Subscription,{through:'SubscriptionContents',foreignKey:'contentId',as:'subscription'});
      Content.hasMany(models.Episode,{foreignKey:'contentId',as:'episode'});
    }
  };
  Content.init({
    title: DataTypes.STRING,
    name: DataTypes.STRING,
    contentTypeId: DataTypes.INTEGER,
    isAlwaysFree: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Content',
  });
  return Content;
};