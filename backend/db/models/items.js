'use strict';
module.exports = (sequelize, DataTypes) => {
  const Items = sequelize.define('Items', {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users'
      }
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    },
    desc: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    img_url: {
      type: DataTypes.CHAR(400),
      allowNull: true,
    }
  }, {});



  Items.associate = function(models) {
    Items.belongsTo(models.User, { foreignKey: 'user_id', onDelete: 'CASCADE'});
    Items.hasMany(models.Borrow, { foreignKey: 'item_id', as: 'Borrow', onDelete: 'CASCADE'});
    
  };
  return Items;
};