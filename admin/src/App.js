import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<Login />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/tutors" element={<div>Tutors Page</div>} />
        <Route path="/admin/language-lounge" element={<div>Language Lounge Page</div>} />
        <Route path="/admin/leaderboards" element={<div>Leaderboards Page</div>} />
        <Route path="/admin/api" element={<div>API Page</div>} />
        <Route path="/admin/settings" element={<div>Settings Page</div>} />
        <Route path="*" element={<Navigate to="/admin" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
