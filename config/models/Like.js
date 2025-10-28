import { DataTypes } from 'sequelize';
import getSequelize from '../connectDatabase.js';
import Comment from './Comment.js';

const sequelize = getSequelize();

const Like = sequelize.define('Like', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  commentId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'commentId',
    references: {
      model: Comment,
      key: 'id'
    }
  },
  ipAddress: {
    type: DataTypes.STRING,
    allowNull: true,
    field: 'ipAddress'
  }
}, {
  tableName: 'likes',
  underscored: false,
  timestamps: false
});

// Relationship
Comment.hasMany(Like, { foreignKey: 'commentId', as: 'likes' });
Like.belongsTo(Comment, { foreignKey: 'commentId', as: 'comment' });

export default Like;

