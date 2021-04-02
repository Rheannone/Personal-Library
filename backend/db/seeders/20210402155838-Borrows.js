'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Borrows', [
        {
        item_id: '3',
        borrower_id: '2',
        owner_id: '1',
        lent: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Borrows', null, {});

  }
};
