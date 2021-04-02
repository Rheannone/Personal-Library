'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Friends', [{
        user_id: '1',
        friend_id: '2',
        friend_username: 'Demo-lition',
        createdAt: new Date(),
        updatedAt: new Date()          
      },
      {
        user_id: '1',
        friend_id: '3',
        friend_username: 'FakeUser1',
        createdAt: new Date(),
        updatedAt: new Date()          
      },
      {
        user_id: '1',
        friend_id: '4',
        friend_username: 'FakeUser2',
        createdAt: new Date(),
        updatedAt: new Date()          
      }], {});
  
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Friends', null, {});
    
  }
};
