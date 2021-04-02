'use strict';
module.exports = (sequelize, DataTypes) => {
  const Borrow = sequelize.define('Borrow', {
    item_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Items'
      }
    },
    borrower_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users'
      }
    },
    owner_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users'
      }  
    },
    lent: {
      required: true,
      type: DataTypes.DATE,
      allowNull: false,
    },
    returned: {
      allowNull: true,
      type: DataTypes.DATE,
     
    },
  }, {});
  Borrow.associate = function(models) {
    Borrow.belongsTo(models.Items, {foreignKey: 'item_id'});
    Borrow.belongsTo(models.User, {foreignKey: 'owner_id'});
    Borrow.belongsTo(models.User, {foreignKey: 'borrower_id' });
  };
  return Borrow;
};