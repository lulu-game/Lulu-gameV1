import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import '../styles/Dashboard.css';
import SubscribersChart from '../components/SubscribersChart';
import LearningProgressChart from '../components/LearningProgressChart'; // Import the LearningProgressChart component
import LanguageLounge from '../pages/LanguageLounge';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="content">
        <header>
          <nav className="top-nav">
            <div className="logo"></div>
            <ul className="nav-links">
              <li><Link to="/admin/dashboard" className="active">Dashboard</Link></li>
              <li><Link to="/admin/tutors">Tutors</Link></li>
              <li><Link to="/admin/language-lounge">Language Lounge</Link></li>
              <li><Link to="/admin/leaderboards">LeaderBoards</Link></li>
              <li><input type="text" placeholder="Search" className="search-bar" /></li>
              <li><i className="fa fa-bell"></i></li>
              <li><i className="fa fa-user"></i></li>
            </ul>
          </nav>
        </header>
        <main>
          <h2>Dashboard</h2>
          <div className="dashboard-stats">
            <div className="stat-card">
              <h3>Total Learners</h3>
              <p className="stat-value">10,000</p>
              <p className="stat-change">+40%</p> {/* Move to the right */}
            </div>
            <div className="stat-card">
              <h3>Total Languages</h3>
              <p className="stat-value">7,00</p>
            </div>
            <div className="stat-card">
              <h3>Premium Subscribers</h3>
              <p className="stat-value">4,250</p>
              <p className="stat-change">+20%</p> {/* Move to the right */}
            </div>
          </div>
          <div className="chart-container">
            <h3>New subscribers count <strong>(,00)</strong></h3>
            <SubscribersChart />
          </div>
          <div className="progress-overview">
          <h3>Learning Progress Overview</h3>
          <LearningProgressChart /> 
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
