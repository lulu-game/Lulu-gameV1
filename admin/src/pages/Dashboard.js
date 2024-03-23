// src/pages/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import '../styles/Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="content">
        <header>
          <div className="admin-icon">Admin Icon</div>
          <div className="search-bar">Search Bar</div>
        </header>
        <main>
          <h2>Welcome to the Dashboard</h2>
          <p>This is the main content area of the dashboard.</p>
          <nav>
            <ul>
              <li>
                <Link to="/admin/tutors">Tutors</Link>
              </li>
              <li>
                <Link to="/admin/language-lounge">Language Lounge</Link>
              </li>
              <li>
                <Link to="/admin/leaderboards">Leaderboards</Link>
              </li>
              <li>
                <Link to="/admin/api">API</Link>
              </li>
              <li>
                <Link to="/admin/settings">Settings</Link>
              </li>
            </ul>
          </nav>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;