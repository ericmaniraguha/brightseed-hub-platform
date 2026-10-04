import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Research from './pages/Research';
import Career from './pages/Career';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

// Admin imports
import Login from './admin/Login';
import AdminLayout from './admin/AdminLayout';
import AdminDashboard from './admin/AdminDashboard';
import ManageProjects from './admin/ManageProjects';
import ManageBlogs from './admin/ManageBlogs';
import ManageServices from './admin/ManageServices';
import ManageCareers from './admin/ManageCareers';

function App() {
  const [adminUser, setAdminUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (token) {
      try {
        // Decode token payload (basic persistence)
        const payload = JSON.parse(atob(token.split('.')[1]));
        if (payload.exp * 1000 > Date.now()) {
          setAdminUser({ email: payload.email, role: payload.role });
        } else {
          localStorage.removeItem('adminToken');
        }
      } catch (e) {
        localStorage.removeItem('adminToken');
      }
    }
  }, []);

  const handleLogin = (user) => {
    setAdminUser(user);
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    setAdminUser(null);
  };

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route
          path="/*"
          element={
            <div className="page-wrapper">
              <Navbar />
              <main className="main-content">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/team" element={<Team />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/research" element={<Research />} />
                  <Route path="/career" element={<Career />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </main>
              <Footer />
            </div>
          }
        />

        {/* Admin Login */}
        <Route
          path="/admin/login"
          element={
            adminUser
              ? <Navigate to="/admin" replace />
              : <Login onLogin={handleLogin} />
          }
        />

        {/* Admin Protected Routes */}
        <Route
          path="/admin"
          element={
            adminUser
              ? <AdminLayout onLogout={handleLogout} />
              : <Navigate to="/admin/login" replace />
          }
        >
          <Route index element={<AdminDashboard />} />
          <Route path="projects" element={<ManageProjects />} />
          <Route path="blogs" element={<ManageBlogs />} />
          <Route path="services" element={<ManageServices />} />
          <Route path="careers" element={<ManageCareers />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
