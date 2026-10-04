import React, { useState } from 'react';
import Header from './components/Header';
import Table from './components/Table';
import { Plus, X } from 'lucide-react';

const ManageBlogs = () => {
  const [blogs, setBlogs] = useState([
    { id: 1, title: 'The Future of AI in Business Intelligence', author: 'Alex Johnson', status: 'Published', date: '2026-03-15' },
    { id: 2, title: 'Data-Driven Decision Making: A Complete Guide', author: 'Sarah Chen', status: 'Published', date: '2026-03-08' },
    { id: 3, title: 'Cybersecurity Trends to Watch in 2026', author: 'David Okeke', status: 'Draft', date: '2026-02-28' },
    { id: 4, title: 'Building Scalable Cloud-Native Applications', author: 'Maria Santos', status: 'Published', date: '2026-02-20' },
    { id: 5, title: 'Machine Learning in Healthcare', author: 'Alex Johnson', status: 'Draft', date: '2026-02-12' },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [form, setForm] = useState({ title: '', author: '', status: 'Draft' });

  const columns = [
    { key: 'id', label: '#' },
    { key: 'title', label: 'Title' },
    { key: 'author', label: 'Author' },
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
    setForm({ title: '', author: '', status: 'Draft' });
    setShowModal(true);
  };

  const openEdit = (item) => {
    setEditItem(item);
    setForm({ title: item.title, author: item.author, status: item.status });
    setShowModal(true);
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (editItem) {
      setBlogs(blogs.map(b => b.id === editItem.id ? { ...b, ...form } : b));
    } else {
      setBlogs([...blogs, { id: Date.now(), ...form, date: new Date().toISOString().split('T')[0] }]);
    }
    setShowModal(false);
  };

  const handleDelete = (item) => {
    if (window.confirm(`Delete "${item.title}"?`)) {
      setBlogs(blogs.filter(b => b.id !== item.id));
    }
  };

  return (
    <div className="admin-page">
      <Header title="Manage Blog Posts" subtitle="Create, edit, and publish blog articles." />

      <div className="admin-toolbar">
        <span className="admin-toolbar-count">{blogs.length} posts</span>
        <button className="btn btn-primary" onClick={openCreate}>
          <Plus size={18} /> New Post
        </button>
      </div>

      <Table columns={columns} data={blogs} onEdit={openEdit} onDelete={handleDelete} />

      {/* Modal */}
      {showModal && (
        <div className="admin-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="admin-modal" onClick={(e) => e.stopPropagation()}>
            <div className="admin-modal-header">
              <h3>{editItem ? 'Edit Post' : 'New Post'}</h3>
              <button className="admin-modal-close" onClick={() => setShowModal(false)}>
                <X size={20} />
              </button>
            </div>
            <form onSubmit={handleSave} className="admin-modal-form">
              <div className="form-group">
                <label className="form-label">Post Title</label>
                <input
                  className="form-input"
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  placeholder="Enter post title"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Author</label>
                <input
                  className="form-input"
                  value={form.author}
                  onChange={(e) => setForm({ ...form, author: e.target.value })}
                  placeholder="Author name"
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
                  {editItem ? 'Save Changes' : 'Publish Post'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageBlogs;
