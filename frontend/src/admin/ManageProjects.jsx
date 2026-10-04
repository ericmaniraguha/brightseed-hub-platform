import React, { useState } from 'react';
import Header from './components/Header';
import Table from './components/Table';
import { Plus, X } from 'lucide-react';

const ManageProjects = () => {
  const [projects, setProjects] = useState([
    { id: 1, title: 'HealthPulse AI', category: 'AI & Healthcare', status: 'Published', date: '2026-03-15' },
    { id: 2, title: 'FinSight Dashboard', category: 'Data Analytics', status: 'Published', date: '2026-03-08' },
    { id: 3, title: 'AgroTrack System', category: 'IoT & Agriculture', status: 'Draft', date: '2026-02-28' },
    { id: 4, title: 'SecureVault Pro', category: 'Cybersecurity', status: 'Published', date: '2026-02-20' },
    { id: 5, title: 'EduStream Platform', category: 'EdTech', status: 'Draft', date: '2026-02-12' },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [form, setForm] = useState({ title: '', category: '', status: 'Draft' });

  const columns = [
    { key: 'id', label: '#' },
    { key: 'title', label: 'Title' },
    { key: 'category', label: 'Category' },
    {
      key: 'status', label: 'Status',
      render: (val) => (
        <span className={`admin-badge ${val === 'Published' ? 'success' : 'warning'}`}>
          {val}
        </span>
      )
    },
    { key: 'date', label: 'Date' },
  ];

  const openCreate = () => {
    setEditItem(null);
    setForm({ title: '', category: '', status: 'Draft' });
    setShowModal(true);
  };

  const openEdit = (item) => {
    setEditItem(item);
    setForm({ title: item.title, category: item.category, status: item.status });
    setShowModal(true);
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (editItem) {
      setProjects(projects.map(p => p.id === editItem.id ? { ...p, ...form } : p));
    } else {
      setProjects([...projects, { id: Date.now(), ...form, date: new Date().toISOString().split('T')[0] }]);
    }
    setShowModal(false);
  };

  const handleDelete = (item) => {
    if (window.confirm(`Delete "${item.title}"?`)) {
      setProjects(projects.filter(p => p.id !== item.id));
    }
  };

  return (
    <div className="admin-page">
      <Header title="Manage Projects" subtitle="Create, edit, and manage your portfolio projects." />

      <div className="admin-toolbar">
        <span className="admin-toolbar-count">{projects.length} projects</span>
        <button className="btn btn-primary" onClick={openCreate}>
          <Plus size={18} /> Add Project
        </button>
      </div>

      <Table columns={columns} data={projects} onEdit={openEdit} onDelete={handleDelete} />

      {/* Modal */}
      {showModal && (
        <div className="admin-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="admin-modal" onClick={(e) => e.stopPropagation()}>
            <div className="admin-modal-header">
              <h3>{editItem ? 'Edit Project' : 'New Project'}</h3>
              <button className="admin-modal-close" onClick={() => setShowModal(false)}>
                <X size={20} />
              </button>
            </div>
            <form onSubmit={handleSave} className="admin-modal-form">
              <div className="form-group">
                <label className="form-label">Project Title</label>
                <input
                  className="form-input"
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  placeholder="Enter project title"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Category</label>
                <input
                  className="form-input"
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value })}
                  placeholder="e.g. AI & Healthcare"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Status</label>
                <select
                  className="form-input"
                  value={form.status}
                  onChange={(e) => setForm({ ...form, status: e.target.value })}
                >
                  <option value="Draft">Draft</option>
                  <option value="Published">Published</option>
                </select>
              </div>
              <div className="admin-modal-actions">
                <button type="button" className="btn btn-outline" onClick={() => setShowModal(false)}>Cancel</button>
                <button type="submit" className="btn btn-primary">
                  {editItem ? 'Save Changes' : 'Create Project'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageProjects;
