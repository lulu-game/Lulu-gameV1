import React from 'react';
import ReactDOM from 'react-dom';
import './styles/App.css';
import './styles/Dashboard.css';
import './styles/Sidebar.css';
//import './styles/SidebarLink.css';
import './styles/Login.css';
import App from './App';
import '@fortawesome/fontawesome-free/css/all.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);