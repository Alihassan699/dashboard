import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import '../styles/Progress.css';
import Experts from './Experts';

// Register Chart.js components
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Last year',
      data: [65, 59, 80, 81, 56, 55],
      fill: false,
      backgroundColor: '#3b82f6',
      borderColor: '#3b82f6',
    },
  ],
};

const options = {
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

function Progress() {
  return (
    <div className="progress-container">
      <h2 className="progress-title">Contracts</h2>
      <div className="progress-grid">
        <div className="progress-card">
          <h3>Total Contracts</h3>
          <p>137</p>
        </div>
        <div className="progress-card">
          <h3>Last 30 Days</h3>
          <p>23</p>
        </div>
        <div className="progress-card">
          <h3>Revenue</h3>
          <p>SR 1.2 M</p>
        </div>
        <div className="chart-card">
          <h3>Last year</h3>
          <div className="chart-container">
            <Line data={data} options={options} />
          </div>
        </div>
      </div>
      <Experts />
    </div>
  );
}

export default Progress;
