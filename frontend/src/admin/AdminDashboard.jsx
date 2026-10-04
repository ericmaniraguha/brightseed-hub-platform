import React from 'react';
import Header from './components/Header';
import {
  FolderKanban, FileText, Users, Mail,
  TrendingUp, Eye, ArrowUpRight, ArrowDownRight,
  BarChart, Activity
} from 'lucide-react';

const AdminDashboard = () => {
  const stats = [
    {
      label: 'Total Projects',
      value: '24',
      change: '+12%',
      trend: 'up',
      icon: <FolderKanban size={24} />,
      color: '#007BFF'
    },
    {
      label: 'Blog Posts',
      value: '38',
      change: '+8%',
      trend: 'up',
      icon: <FileText size={24} />,
      color: '#00C853'
    },
    {
      label: 'Messages',
      value: '156',
      change: '+23%',
      trend: 'up',
      icon: <Mail size={24} />,
      color: '#8b5cf6'
    },
    {
      label: 'Page Views',
      value: '12.4K',
      change: '-3%',
      trend: 'down',
      icon: <Eye size={24} />,
      color: '#f97316'
    },
  ];

  const recentActivities = [
    { action: 'New project "HealthPulse AI" was published', time: '2 hours ago', type: 'project' },
    { action: 'Blog post "AI in Business Intelligence" was updated', time: '4 hours ago', type: 'blog' },
    { action: 'New contact message from John Smith', time: '5 hours ago', type: 'message' },
    { action: 'Service "Cloud Solutions" details updated', time: '1 day ago', type: 'service' },
    { action: 'Team member Sarah Chen profile updated', time: '2 days ago', type: 'team' },
    { action: 'New contact message from Maria Garcia', time: '2 days ago', type: 'message' },
  ];

  const topPages = [
    { page: '/home', views: '4,230', percentage: 34 },
    { page: '/services', views: '2,815', percentage: 23 },
    { page: '/about', views: '1,960', percentage: 16 },
    { page: '/projects', views: '1,740', percentage: 14 },
    { page: '/contact', views: '1,120', percentage: 9 },
    { page: '/blog', views: '535', percentage: 4 },
  ];

  return (
    <div className="admin-page">
      <Header title="Dashboard" subtitle="Welcome back! Here's what's happening." />

      {/* Stats Cards */}
      <div className="admin-stats-grid">
        {stats.map((stat, idx) => (
          <div key={idx} className="admin-stat-card">
            <div className="admin-stat-icon" style={{ backgroundColor: stat.color + '15', color: stat.color }}>
              {stat.icon}
            </div>
            <div className="admin-stat-info">
              <span className="admin-stat-label">{stat.label}</span>
              <span className="admin-stat-value">{stat.value}</span>
            </div>
            <div className={`admin-stat-change ${stat.trend}`}>
              {stat.trend === 'up' ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
              {stat.change}
            </div>
          </div>
        ))}
      </div>

      {/* Two Column Layout */}
      <div className="admin-dashboard-grid">
        {/* Recent Activity */}
        <div className="admin-card">
          <div className="admin-card-header">
            <h3><Activity size={18} /> Recent Activity</h3>
          </div>
          <div className="admin-activity-list">
            {recentActivities.map((activity, idx) => (
              <div key={idx} className="admin-activity-item">
                <div className={`admin-activity-dot ${activity.type}`}></div>
                <div className="admin-activity-content">
                  <p>{activity.action}</p>
                  <span>{activity.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Pages */}
        <div className="admin-card">
          <div className="admin-card-header">
            <h3><BarChart size={18} /> Top Pages</h3>
          </div>
          <div className="admin-top-pages">
            {topPages.map((page, idx) => (
              <div key={idx} className="admin-top-page-item">
                <div className="admin-top-page-info">
                  <span className="admin-top-page-name">{page.page}</span>
                  <span className="admin-top-page-views">{page.views} views</span>
                </div>
                <div className="admin-top-page-bar">
                  <div
                    className="admin-top-page-fill"
                    style={{ width: `${page.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
