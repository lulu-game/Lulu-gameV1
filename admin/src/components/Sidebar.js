import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css';

const Sidebar = () => {
  const navLinks = [
    { name: 'Admin', path: '/admin/dashboard' },
    { name: 'Revenue', path: '/admin/Revenue' },
    { name: 'API', path: '/admin/API' },
    { name: 'Settings', path: '/admin/settings' },
    { name: 'View Site', path: '/admin/site' },
    { name: 'Profile', path: '/admin/profile' },
    { name: 'Log out', path: '/admin/login' },
  ];

  return (
    <div className="sidebar">
      <ul>
        {navLinks.map((link) => (
          <li key={link.path}>
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;