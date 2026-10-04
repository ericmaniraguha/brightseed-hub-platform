const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',
  logging: false
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ SQLite connected successfully');

    // Sync all models (creates tables if they don't exist)
    await sequelize.sync({ alter: true });
    console.log('✅ Database tables synchronized');
  } catch (error) {
    console.error('❌ Database connection failed:', error.message);
    console.error('   Check your .env DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASSWORD');
    // Don't crash the server — let other features work even without DB
  }
};

module.exports = { sequelize, connectDB };
