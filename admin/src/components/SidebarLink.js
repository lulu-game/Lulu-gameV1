import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/SidebarLink.css';

const SidebarLink = ({ label, path }) => {
  return (
    <li className="sidebar-link">
      <Link to={path}>{label}</Link>
    </li>
  );
};

export default SidebarLink;