'use strict';
module.exports = (sequelize, DataTypes) => {
  const Friend = sequelize.define('Friend', {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users'
      }
    },
    friend_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users'
      }
    },
    friend_username: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'username',
        as: 'friend_username'
      }
    }
  }, {});
  Friend.associate = function(models) {
    Friend.belongsTo(models.User, {foreignKey: 'user_id', onDelete: 'CASCADE'});
    Friend.belongsTo(models.User, {foreignKey: 'friend_id', onDelete: 'CASCADE'});
    Friend.belongsTo(models.User, {foreignKey: 'friend_username', onDelete: 'CASCADE'});


  };
  return Friend;
};