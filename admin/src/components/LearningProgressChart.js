// src/components/LearningProgressChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import '../styles/LearningProgressChart.css';

const LearningProgressChart = () => {
  const data = {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [
      {
        label: 'Active User Trend',
        data: [30, 20, 25, 40, 35, 45, 35],
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.4,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };


  return (
    <div className="learning-progress-chart">
      <div className="stats">
        <div className="stat">
          <span>Active Learners</span>
          <span>1,250 (+5%)</span>
        </div>
        <div className="stat">
          <span>Complete Lessons</span>
          <span>5,000 (+8%)</span>
        </div>
      </div>
      <div className="toggle-buttons">
        <button>Week</button>
        <button className="active">Day</button>
      </div>
      <Line data={data} options={options} />
    </div>
  );
};

export default LearningProgressChart;