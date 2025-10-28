import { DataTypes } from 'sequelize';
import getSequelize from '../connectDatabase.js';

const sequelize = getSequelize();

const Comment = sequelize.define('Comment', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  postSlug: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'postSlug'
  },
  authorName: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: 'Anonymous',
    field: 'authorName'
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'content'
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: true,
    field: 'createdAt'
  }
}, {
  tableName: 'comments',
  underscored: false,
  timestamps: true,
  createdAt: 'createdAt',
  updatedAt: false
});

export default Comment;

