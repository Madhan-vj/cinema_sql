'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Video extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Video.hasOne(models.Movie, {foreignKey: 'videoId', as: 'movies', onDelete: 'CASCADE'});
      Video.hasOne(models.Episode,{foreignKey:'videoId',as:'episode',onDelete: 'CASCADE'});
      Video.belongsToMany(models.Customer,{through:'Purchases',foreignKey:'videoId',as:'customer'});
    }
  };
  Video.init({
    url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Video',
  });
  return Video;
};