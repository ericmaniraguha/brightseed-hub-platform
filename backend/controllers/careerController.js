const Career = require('../models/Career');

// GET /api/v1/careers (Public)
const getCareers = async (req, res) => {
  try {
    const careers = await Career.findAll({ order: [['createdAt', 'DESC']] });
    res.json({ success: true, data: careers });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch careers' });
  }
};

// POST /api/v1/careers (Admin)
const createCareer = async (req, res) => {
  try {
    const { title, location, type, department, status } = req.body;
    const newCareer = await Career.create({ title, location, type, department, status });
    res.status(201).json({ success: true, data: newCareer });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create career' });
  }
};

// DELETE /api/v1/careers/:id (Admin)
const deleteCareer = async (req, res) => {
  try {
    const career = await Career.findByPk(req.params.id);
    if (!career) return res.status(404).json({ error: 'Career not found' });
    
    await career.destroy();
    res.json({ success: true, message: 'Career deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete career' });
  }
};

module.exports = { getCareers, createCareer, deleteCareer };
