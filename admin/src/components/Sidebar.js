// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css';

const Sidebar = () => {
  const navLinks = [
    { name: 'Admin', path: '/admin/dashboard' },
    { name: 'Revenue', path: '/admin/dashboard' },
    { name: 'API', path: '/admin/dashboard' },
    { name: 'Settings', path: '/admin/dashboard' },
    { name: 'View Site', path: '/admin/dashboard' },
    { name: 'Log out', path: '/admin/dashboard' },
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