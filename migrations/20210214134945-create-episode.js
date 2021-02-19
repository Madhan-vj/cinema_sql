'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Episodes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      seasonId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'Seasons',
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
      videoId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'Videos',
          key:'id'
        }
      },
      isAlwaysFree: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('Episodes');
  }
};