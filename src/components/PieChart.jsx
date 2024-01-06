
import React from 'react';
import { Pie } from 'react-chartjs-2';
import '../App.css';
import {Chart, ArcElement} from 'chart.js'


Chart.register(ArcElement)



const PieChart = ({ missions }) => {
  // Count the number of successful missions


  //console.log(missions.length);


  const successfulMissions = missions.filter(mission => mission.successful === true).length;

  console.log(successfulMissions);
  const failedMissions = missions.length - successfulMissions;

  console.log(failedMissions);

  // Data for the pie chart
  const data = {
    labels: ['Successful Missions', 'Failed Missions'],
    datasets: [
      {
        //labels: ['Successful Missions', 'Failed Missions'],
        data: [successfulMissions, failedMissions],
        backgroundColor: ['#36A2EB', '#FF6384'],
        hoverBackgroundColor: ['#b1f2bd', '#c8ecfa'],
        label: 'No of Mission',
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    legend: {
        display: true, // Ensure legend is set to display
      },
    title: {
        display: true,
        text: 'Pie Chart Title',
    },
    tooltips: {
      enabled: true,
    },
  };

  return (
    <div style={{ height: '400px', width: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 'auto'}}>
    <Pie data={data} options={options} />
    </div>
  )
  
};

export default PieChart;