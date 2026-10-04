const express = require('express');
const router = express.Router();
const { submitContact, getMessages, markAsRead, deleteMessage } = require('../controllers/contactController');
const authMiddleware = require('../middleware/authMiddleware');

// Public route — submit contact form
router.post('/', submitContact);

// Admin routes (protected)
router.get('/', authMiddleware, getMessages);
router.patch('/:id/read', authMiddleware, markAsRead);
router.delete('/:id', authMiddleware, deleteMessage);

module.exports = router;
