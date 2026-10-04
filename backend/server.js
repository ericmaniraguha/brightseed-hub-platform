const express = require('express');
const cors = require('cors');
require('dotenv').config();

const { connectDB } = require('./config/db');
const { verifyEmailConnection } = require('./utils/sendEmail');

// Import routes
const contactRoutes = require('./routes/contactRoutes');
const projectRoutes = require('./routes/projectRoutes');
const adminRoutes = require('./routes/adminRoutes');
const careerRoutes = require('./routes/careerRoutes');

const app = express();
const PORT = process.env.BACKEND_PORT || 8003;
const API_PREFIX = process.env.API_V1_STR || '/api/v1';

// ===== MIDDLEWARE =====
app.use(cors({
  origin: [
    `http://localhost:${process.env.FRONTEND_PORT || 5173}`,
    'http://localhost:5174',
    'http://localhost:5175',
  ],
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ===== ROUTES =====
app.use(`${API_PREFIX}/contact`, contactRoutes);
app.use(`${API_PREFIX}/projects`, projectRoutes);
app.use(`${API_PREFIX}/admin`, adminRoutes);
app.use(`${API_PREFIX}/careers`, careerRoutes);

// ===== HEALTH CHECK =====
app.get('/health', (req, res) => {
  res.json({
    name: process.env.PROJECT_NAME || 'BrightSeedHub API',
    version: '1.0.0',
    status: 'Running',
    endpoints: {
      contact: `${API_PREFIX}/contact`,
      projects: `${API_PREFIX}/projects`,
      admin: `${API_PREFIX}/admin`,
    }
  });
});

// ===== SERVE FRONTEND IN PRODUCTION =====
const path = require('path');
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static(path.join(__dirname, '../frontend/dist')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend', 'dist', 'index.html'));
  });
} else {
  app.get('/', (req, res) => res.send('Please set to production'));
}

// ===== ERROR HANDLER =====
app.use((err, req, res, next) => {
  console.error('Server Error:', err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

// ===== START SERVER =====
const startServer = async () => {
  console.log('');
  console.log('🌱 BrightSeed Hub Backend Starting...');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

  // Connect to PostgreSQL
  await connectDB();

  // Verify SMTP email connection
  await verifyEmailConnection();

  // Start listening
  app.listen(PORT, () => {
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`📡 API Base: http://localhost:${PORT}${API_PREFIX}`);
    console.log(`📋 Health Check: http://localhost:${PORT}/`);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  });
};

startServer();
