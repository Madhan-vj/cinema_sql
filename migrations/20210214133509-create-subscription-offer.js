'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('SubscriptionOffers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      subscriptionId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'Subscriptions',
          key:'id'
        }
      },
      offerId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'Offers',
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
    await queryInterface.dropTable('SubscriptionOffers');
  }
};