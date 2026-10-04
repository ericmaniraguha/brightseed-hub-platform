const Project = require('../models/Project');

// GET /api/v1/projects — Get all projects (public: published only, admin: all)
const getProjects = async (req, res) => {
  try {
    const isAdmin = req.query.all === 'true';
    const where = isAdmin ? {} : { status: 'Published' };
    const projects = await Project.findAll({ where, order: [['createdAt', 'DESC']] });
    res.json({ success: true, data: projects });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch projects' });
  }
};

// GET /api/v1/projects/:id — Get a single project
const getProject = async (req, res) => {
  try {
    const project = await Project.findByPk(req.params.id);
    if (!project) return res.status(404).json({ error: 'Project not found' });
    res.json({ success: true, data: project });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch project' });
  }
};

// POST /api/v1/projects — Create a project (admin)
const createProject = async (req, res) => {
  try {
    const { title, description, category, image, status, link } = req.body;
    if (!title || !category) {
      return res.status(400).json({ error: 'Title and category are required' });
    }
    const project = await Project.create({ title, description, category, image, status, link });
    res.status(201).json({ success: true, data: project });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create project' });
  }
};

// PUT /api/v1/projects/:id — Update a project (admin)
const updateProject = async (req, res) => {
  try {
    const project = await Project.findByPk(req.params.id);
    if (!project) return res.status(404).json({ error: 'Project not found' });

    await project.update(req.body);
    res.json({ success: true, data: project });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update project' });
  }
};

// DELETE /api/v1/projects/:id — Delete a project (admin)
const deleteProject = async (req, res) => {
  try {
    const project = await Project.findByPk(req.params.id);
    if (!project) return res.status(404).json({ error: 'Project not found' });

    await project.destroy();
    res.json({ success: true, message: 'Project deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete project' });
  }
};

module.exports = { getProjects, getProject, createProject, updateProject, deleteProject };
