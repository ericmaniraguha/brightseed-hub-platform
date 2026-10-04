const express = require('express');
const router = express.Router();
const { adminLogin, seedAdmin, getBlogs, createBlog, updateBlog, deleteBlog } = require('../controllers/adminController');
const authMiddleware = require('../middleware/authMiddleware');

// Public admin routes
router.post('/login', adminLogin);
router.post('/seed', seedAdmin);

// Protected blog CRUD routes
router.get('/blogs', authMiddleware, getBlogs);
router.post('/blogs', authMiddleware, createBlog);
router.put('/blogs/:id', authMiddleware, updateBlog);
router.delete('/blogs/:id', authMiddleware, deleteBlog);

module.exports = router;
