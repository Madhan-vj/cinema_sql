'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('RegionContents', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      regionId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'Regions',
          key:'id'
        }
      },
      contentId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'Contents',
          key:'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('RegionContents');
  }
};