import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables} from 'chart.js';
Chart.register(...registerables);

const BarChart = ({ missions }) => {
  const companySuccessCounts = missions.reduce((counts, mission) => {
    if (mission.successful === true) {
      const companyName = mission.company || 'Unknown';
      counts[companyName] = (counts[companyName] || 0) + 1;
    }
    return counts;
  }, {});

  const data = {
    labels: Object.keys(companySuccessCounts),
    datasets: [
      {
        label: 'Successful Missions by Company',
        data: Object.values(companySuccessCounts),
        backgroundColor: '#36A2EB',
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
    <Bar data={data} options={options} />
    );
};

export default BarChart;
