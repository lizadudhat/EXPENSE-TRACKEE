import React from 'react';
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
  Filler,
} from 'chart.js';
import 'chartjs-plugin-annotation';

// Register the components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const ExpenseChart = ({ expenses }) => {
  // Define all months
  const allMonths = [
    'January', 'February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  // Aggregate expenses by month
  const monthlyData = expenses.reduce((acc, expense) => {
    const date = new Date(expense.date);
    const month = date.toLocaleString('default', { month: 'long' });
    if (!acc[month]) {
      acc[month] = 0;
    }
    acc[month] += expense.amount;
    return acc;
  }, {});

  // Prepare data arrays for chart
  const labels = allMonths; // Use all months
  const dataValues = allMonths.map(month => monthlyData[month] || 0); // Map expenses or 0 if no data

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Monthly Expenses',
        data: dataValues,
        fill: true,
        backgroundColor: 'rgba(75, 192, 192, 0.4)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 7,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          color: 'black',
          font: {
            size: 14,
          },
        },
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: function(tooltipItem) {
            return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
          },
        },
      },
      annotation: {
        annotations: {},
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Month',
          color: 'black',
          font: {
            size: 16,
            weight: 'bold',
          },
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Total Amount',
          color: 'black',
          font: {
            size: 16,
            weight: 'bold',
          },
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
      },
    },
    animations: {
      tension: {
        duration: 0,
      },
    },
  };

  // Adding upward arrows for each month that has expenses
  allMonths.forEach((month, index) => {
    if (monthlyData[month]) { // Only add an arrow for months with expenses
      options.plugins.annotation.annotations[`arrow-${month}`] = {
        type: 'line',
        yMin: 0,
        yMax: monthlyData[month], // Arrow points to the month's value
        xMin: month,
        xMax: month,
        borderColor: 'red',
        borderWidth: 2,
        label: {
          content: '↑', // Upward arrow character
          enabled: true,
          position: 'top', // Position above the line
          backgroundColor: 'white',
        },
      };
    }
  });

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Monthly Expenses Chart</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default ExpenseChart;
