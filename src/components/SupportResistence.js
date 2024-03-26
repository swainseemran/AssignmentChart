import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const SupportResistence = () => {

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'My Dataset 2',
        data: [31, 64, 17, 82, 49],
        backgroundColor: 'rgba(367, 39, 292, 0.2)',
        borderColor: 'rgba(367, 37, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
        },
      }],
    },
  };
  

  return (
    <div className='w-full'>
      <Bar data={data} options={options} />
    </div>
  );
}
