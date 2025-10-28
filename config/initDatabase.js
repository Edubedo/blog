import getSequelize from './connectDatabase.js';
import Comment from './models/Comment.js';
import Like from './models/Like.js';

export async function initDatabase() {
  try {
    const sequelize = getSequelize();
    
    // Test connection
    await sequelize.authenticate();
    console.log('✅ Database connection established successfully.');
    
    return true;
  } catch (error) {
    console.error('❌ Unable to connect to the database:', error);
    return false;
  }
}

export default initDatabase;

