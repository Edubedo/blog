import getSequelize from '../config/connectDatabase.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function setupDatabase() {
  try {
    const sequelize = getSequelize();
    
    // Test connection
    await sequelize.authenticate();
    console.log('✅ Connected to database successfully');
    
    // Read SQL file
    const sqlPath = path.join(__dirname, '../config/setupDatabase.sql');
    const sql = fs.readFileSync(sqlPath, 'utf8');
    
    // Execute SQL
    await sequelize.query(sql);
    
    console.log('✅ Database sequences created successfully');
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error setting up database:', error);
    process.exit(1);
  }
}

setupDatabase();

