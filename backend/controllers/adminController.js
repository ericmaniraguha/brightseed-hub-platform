const AdminUser = require('../models/AdminUser');
const Blog = require('../models/Blog');
const jwt = require('jsonwebtoken');

// POST /api/v1/admin/login — Admin login
const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    const user = await AdminUser.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET || 'brightseed-jwt-secret-key',
      { expiresIn: '24h' }
    );

    res.json({
      success: true,
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });

  } catch (error) {
    console.error('Admin login error:', error);
    res.status(500).json({ error: 'Login failed' });
  }
};

// POST /api/v1/admin/seed — Create default admin user (run once)
const seedAdmin = async (req, res) => {
  try {
    const existing = await AdminUser.findOne({ where: { email: 'admin@brightseedhub.com' } });
    if (existing) {
      return res.json({ message: 'Admin user already exists' });
    }

    const admin = await AdminUser.create({
      name: 'Admin User',
      email: 'admin@brightseedhub.com',
      password: 'admin123',
      role: 'admin'
    });

    res.status(201).json({ success: true, message: 'Admin user created', email: admin.email });
  } catch (error) {
    console.error('Seed admin error:', error);
    res.status(500).json({ error: 'Failed to seed admin' });
  }
};

// ===== BLOG CRUD =====

// GET /api/v1/admin/blogs — Get all blogs
const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.findAll({ order: [['createdAt', 'DESC']] });
    res.json({ success: true, data: blogs });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch blogs' });
  }
};

// POST /api/v1/admin/blogs — Create a blog
const createBlog = async (req, res) => {
  try {
    const { title, excerpt, content, author, category, image, status } = req.body;
    if (!title || !author) {
      return res.status(400).json({ error: 'Title and author are required' });
    }
    const blog = await Blog.create({ title, excerpt, content, author, category, image, status });
    res.status(201).json({ success: true, data: blog });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create blog' });
  }
};

// PUT /api/v1/admin/blogs/:id — Update a blog
const updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findByPk(req.params.id);
    if (!blog) return res.status(404).json({ error: 'Blog not found' });

    await blog.update(req.body);
    res.json({ success: true, data: blog });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update blog' });
  }
};

// DELETE /api/v1/admin/blogs/:id — Delete a blog
const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByPk(req.params.id);
    if (!blog) return res.status(404).json({ error: 'Blog not found' });

    await blog.destroy();
    res.json({ success: true, message: 'Blog deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete blog' });
  }
};

module.exports = { adminLogin, seedAdmin, getBlogs, createBlog, updateBlog, deleteBlog };
