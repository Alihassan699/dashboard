import React from 'react';
import {
    Chart as ChartJS,
    BarElement,
    ArcElement,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';
import '../styles/Cases.css';

ChartJS.register(
    BarElement,
    ArcElement,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend
);

const barData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
        {
            label: 'Last year',
            data: [65, 59, 80, 81, 56, 55, 40, 72, 69, 90, 60, 30],
            backgroundColor: '#3b82f6',
            borderColor: '#3b82f6',
            borderWidth: 1,
        },
    ],
};

const pieData = {
    labels: ['Won', 'Lost', 'In Progress', 'Under Review', 'New', 'Closed', 'Opened'],
    datasets: [
        {
            data: [109, 7, 20, 15, 25, 10, 12],
            backgroundColor: ['#3b82f6', '#f87171', '#fbbf24', '#10b981', '#6366f1', '#ef4444', '#8b5cf6'],
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

const Cases = () => {
    return (
        <div className="cases-container container-grid">
            <h1 className='mb-3'>CASES</h1>
            <div className="cases-grid">
                <div className="case-card">
                    <h3>Total Cases</h3>
                    <p className="case-number">137</p>
                </div>
                <div className="case-card">
                    <h3>Last 30 Days</h3>
                    <p className="case-number">23</p>
                </div>
                <div className="case-card">
                    <h3>Cases Won</h3>
                    <p className="case-number">109</p>
                </div>
                <div className="case-card">
                    <h3>Cases Lost</h3>
                    <p className="case-number">7</p>
                </div>
                <div className="case-card large-card">
                    <h3>Last one year</h3>
                    <div className="chart-container">
                        <Bar data={barData} options={options} />
                    </div>
                </div>
                <div className="case-card large-card">
                    <h3>All Cases</h3>
                    <div className="chart-container">
                        <Pie data={pieData} options={options} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cases;
