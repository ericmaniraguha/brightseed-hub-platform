import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Table from './components/Table';
import { Plus, X } from 'lucide-react';

const ManageCareers = () => {
  const [careers, setCareers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ title: '', location: '', type: 'Full-time', department: '', status: 'open' });
  const [loading, setLoading] = useState(true);

  const fetchCareers = async () => {
    try {
      const res = await fetch('http://localhost:8003/api/v1/careers');
      const data = await res.json();
      if (data.success) {
        setCareers(data.data);
      }
    } catch (error) {
      console.error('Failed to fetch careers', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCareers();
  }, []);

  const columns = [
    { key: 'id', label: '#' },
    { key: 'title', label: 'Title' },
    { key: 'department', label: 'Department' },
    { key: 'type', label: 'Type' },
    { key: 'location', label: 'Location' },
    {
      key: 'status', label: 'Status',
      render: (val) => (
        <span className={`admin-badge ${val === 'open' ? 'success' : 'warning'}`}>
          {val.toUpperCase()}
        </span>
      )
    },
  ];

  const openCreate = () => {
    setForm({ title: '', location: '', type: 'Full-time', department: '', status: 'open' });
    setShowModal(true);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:8003/api/v1/careers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (data.success) {
        fetchCareers();
        setShowModal(false);
      }
    } catch (error) {
      console.error('Failed to save career', error);
    }
  };

  const handleDelete = async (item) => {
    if (window.confirm(`Delete career "${item.title}"?`)) {
      try {
        const res = await fetch(`http://localhost:8003/api/v1/careers/${item.id}`, { method: 'DELETE' });
        if (res.ok) {
          setCareers(careers.filter(c => c.id !== item.id));
        }
      } catch (error) {
        console.error('Failed to delete career', error);
      }
    }
  };

  return (
    <div className="admin-page">
      <Header title="Manage Careers" subtitle="Create and manage open job positions." />

      <div className="admin-toolbar">
        <span className="admin-toolbar-count">{careers.length} positions</span>
        <button className="btn btn-primary" onClick={openCreate}>
          <Plus size={18} /> Add Position
        </button>
      </div>

      {loading ? (
        <p>Loading careers...</p>
      ) : (
        <Table columns={columns} data={careers} onDelete={handleDelete} />
      )}

      {/* Modal */}
      {showModal && (
        <div className="admin-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="admin-modal" onClick={(e) => e.stopPropagation()}>
            <div className="admin-modal-header">
              <h3>New Career Position</h3>
              <button className="admin-modal-close" onClick={() => setShowModal(false)}>
                <X size={20} />
              </button>
            </div>
            <form onSubmit={handleSave} className="admin-modal-form">
              <div className="form-group">
                <label className="form-label">Job Title</label>
                <input className="form-input" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required placeholder="e.g. Senior Developer" />
              </div>
              <div className="form-group">
                <label className="form-label">Department</label>
                <input className="form-input" value={form.department} onChange={(e) => setForm({ ...form, department: e.target.value })} required placeholder="e.g. Engineering" />
              </div>
              <div className="form-group">
                <label className="form-label">Location</label>
                <input className="form-input" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} required placeholder="e.g. Remote or Kigali" />
              </div>
              <div className="form-group">
                <label className="form-label">Type</label>
                <select className="form-input" value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}>
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Contract">Contract</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Status</label>
                <select className="form-input" value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })}>
                  <option value="open">Open</option>
                  <option value="closed">Closed</option>
                </select>
              </div>
              <div className="admin-modal-actions">
                <button type="button" className="btn btn-outline" onClick={() => setShowModal(false)}>Cancel</button>
                <button type="submit" className="btn btn-primary">Create Position</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageCareers;
