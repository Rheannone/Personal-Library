'use strict';
const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Items', [{
        user_id: '1',
        title: 'Angle Grinder',
        desc: 'messed up blade',
        createdAt: new Date(),
        updatedAt: new Date()             
      },
      {
        user_id: '1',
        title: 'Hair Dryer',
        desc: 'Pink Dyson',
        createdAt: new Date(),
        updatedAt: new Date()          
      },
      {
        user_id: '1',
        title: 'Bottom Bracket Extractor',
        desc: 'BB64',
        createdAt: new Date(),
        updatedAt: new Date()             
      },
      {
        user_id: '1',
        title: 'Card Table',
        desc: 'grey folding',
        createdAt: new Date(),
        updatedAt: new Date()             
      },
      {
        user_id: '1',
        title: 'Glocca Morra Hoodie',
        desc: 'boyfriend"s hoodie that I stole',
        createdAt: new Date(),
        updatedAt: new Date()             
      },
      {
        user_id: '1',
        title: 'Mean Girls DVD',
        desc: '',
        createdAt: new Date(),
        updatedAt: new Date()      
      },

    
      ], {});
  
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Items', null, {});
    
  }
};
