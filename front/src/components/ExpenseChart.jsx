"use client"
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the necessary components for the chart
ChartJS.register(ArcElement, Tooltip, Legend);

const ExpenseChart = () => {
  // Sample data for the doughnut chart
  const data = {
    labels: ['Bills', 'Food', 'Shopping', 'Insurance', 'Clothing'],
    datasets: [
      {
        data: [5000000, 5000000, 5000000, 5000000, 5000000], // Values for each category
        backgroundColor: [
          '#4169E1', // Blue for Bills
          '#DC143C', // Red for Food
          '#F4A460', // Peach for Shopping
          '#20B2AA', // Teal for Insurance
          '#FFA500', // Orange for Clothing
        ],
        borderColor: [
          '#fff', // White borders between segments
        ],
        borderWidth: 2,
        cutout: '75%', // For the doughnut hole size
      },
    ],
  };

  // Options to control the appearance of the chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Disable default legend
      },
    },
  };

  return (
    <div style={{ width: '175px', height: '175px', position: 'relative' }}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default ExpenseChart;
