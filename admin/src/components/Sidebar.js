// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css';

const Sidebar = () => {
  const navLinks = [
    { name: 'Dashboard', path: '/admin/dashboard' },
    { name: 'Tutors', path: '/admin/tutors' },
    { name: 'Language Lounge', path: '/admin/language-lounge' },
    { name: 'Leaderboards', path: '/admin/leaderboards' },
    { name: 'API', path: '/admin/api' },
    { name: 'Settings', path: '/admin/settings' },
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