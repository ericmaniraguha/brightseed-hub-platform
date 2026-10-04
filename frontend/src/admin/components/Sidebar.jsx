import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard, FolderKanban, FileText, Settings,
  Rocket, LogOut, Mail, Users, Briefcase
} from 'lucide-react';

const Sidebar = ({ onLogout }) => {
  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Dashboard', path: '/admin' },
    { icon: <FolderKanban size={20} />, label: 'Projects', path: '/admin/projects' },
    { icon: <FileText size={20} />, label: 'Blog Posts', path: '/admin/blogs' },
    { icon: <Briefcase size={20} />, label: 'Services', path: '/admin/services' },
    { icon: <Mail size={20} />, label: 'Messages', path: '/admin/messages' },
    { icon: <Users size={20} />, label: 'Team', path: '/admin/team' },
    { icon: <Briefcase size={20} />, label: 'Careers', path: '/admin/careers' },
  ];

  return (
    <aside className="admin-sidebar">
      <div className="admin-sidebar-brand">
        <div className="admin-sidebar-logo">
          <Rocket size={22} />
        </div>
        <span className="admin-sidebar-title">
          Bright<span className="text-primary">Seed</span>
        </span>
      </div>

      <div className="admin-sidebar-label">MAIN MENU</div>

      <nav className="admin-sidebar-nav">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === '/admin'}
            className={({ isActive }) =>
              `admin-sidebar-link ${isActive ? 'active' : ''}`
            }
          >
            {item.icon}
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="admin-sidebar-footer">
        <NavLink to="/admin/settings" className="admin-sidebar-link">
          <Settings size={20} />
          <span>Settings</span>
        </NavLink>
        <button className="admin-sidebar-link" onClick={onLogout}>
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
