// src/components/SubscribersChart.js
import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const SubscribersChart = () => {
  const [filterOption, setFilterOption] = useState('month');

  const data = {
    labels: [
      'Jan 1', 'Feb 1', 'Mar 1', 'Apr 1', 'May 1', 'Jun 1',
      'Jul 1', 'Aug 1', 'Sep 1', 'Oct 1', 'Nov 1', 'Dec 1',
    ],
    datasets: [
      {
        label: 'New subscribers count',
        data: [15, 10, 8, 15, 12, 20, 25, 18, 22, 30, 28, 35],
        backgroundColor: 'rgba(108, 99, 255, 0.2)',
        borderColor: 'rgba(108, 99, 255, 1)',
        borderWidth: 2,
        tension: 0.4,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: true,
        },
        ticks: {
          stepSize: 5,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const handleFilterChange = (filter) => {
    setFilterOption(filter);

    let filteredData = [];
    let filteredLabels = [];

    switch (filter) {
      case 'day':
        filteredData = [5, 8, 12, 10, 15, 18, 20, 25, 22, 28, 30, 35];
        filteredLabels = [
          '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12',
        ];
        break;
      case 'week':
        filteredData = [40, 50, 60, 70];
        filteredLabels = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
        break;
      case 'month':
        filteredData = data.datasets[0].data;
        filteredLabels = data.labels;
        break;
      default:
        break;
    }

    data.datasets[0].data = filteredData;
    data.labels = filteredLabels;
  };

  return (
    <div className="chart-container">
      <div className="chart-filters">
        <button
          className={`filter-btn ${filterOption === 'day' ? 'active' : ''}`}
          onClick={() => handleFilterChange('day')}
        >
          Day
        </button>
        <button
          className={`filter-btn ${filterOption === 'week' ? 'active' : ''}`}
          onClick={() => handleFilterChange('week')}
        >
          Week
        </button>
        <button
          className={`filter-btn ${filterOption === 'month' ? 'active' : ''}`}
          onClick={() => handleFilterChange('month')}
        >
          Month
        </button>
      </div>
      <Line data={data} options={options} />
    </div>
  );
};

export default SubscribersChart;