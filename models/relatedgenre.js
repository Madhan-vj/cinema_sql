'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RelatedGenre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      RelatedGenre.belongsTo(models.Genre, {foreignKey: 'genreId'});
      RelatedGenre.belongsTo(models.Genre, {foreignKey: 'relatedGenreId'});
    }
  };
  RelatedGenre.init({
    genreId: DataTypes.INTEGER,
    relatedGenreId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'RelatedGenre',
  });
  return RelatedGenre;
};