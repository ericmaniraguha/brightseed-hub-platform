import React from 'react';
import { Bell, Search, ChevronDown, User } from 'lucide-react';

const Header = ({ title, subtitle }) => {
  return (
    <header className="admin-header">
      <div className="admin-header-left">
        <h1 className="admin-header-title">{title}</h1>
        {subtitle && <p className="admin-header-subtitle">{subtitle}</p>}
      </div>

      <div className="admin-header-right">
        <div className="admin-search">
          <Search size={18} className="admin-search-icon" />
          <input
            type="text"
            placeholder="Search..."
            className="admin-search-input"
          />
        </div>

        <button className="admin-notification-btn">
          <Bell size={20} />
          <span className="admin-notification-dot"></span>
        </button>

        <div className="admin-profile">
          <div className="admin-profile-avatar">
            <User size={18} />
          </div>
          <div className="admin-profile-info">
            <span className="admin-profile-name">Admin User</span>
            <span className="admin-profile-role">Administrator</span>
          </div>
          <ChevronDown size={16} />
        </div>
      </div>
    </header>
  );
};

export default Header;
