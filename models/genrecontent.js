'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GenreContent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      GenreContent.belongsTo(models.Genre, {foreignKey: 'genreId'});
      GenreContent.belongsTo(models.Content, {foreignKey: 'contentId'});
    }
  };
  GenreContent.init({
    genreId: DataTypes.INTEGER,
    contentId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'GenreContent',
  });
  return GenreContent;
};