import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';

const AdminLayout = ({ onLogout }) => {
  return (
    <div className="admin-layout">
      <Sidebar onLogout={onLogout} />
      <div className="admin-main">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
