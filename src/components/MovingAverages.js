import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const MovingAverages = () => {

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'My Dataset 3',
        data: [12, 42, 71, 85, 36],
        backgroundColor: 'rgba(0, 255, 0, 0.3)',
        borderColor: 'rgba(0, 256, 0, 1)',
        borderWidth: 1,
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
    <div className='w-full'>
      <Bar data={data} options={options} />
    </div>
  );
}
