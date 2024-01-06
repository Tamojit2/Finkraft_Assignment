import React, { useState, useEffect } from 'react';
import Dashboard from './Dashboard';
import PieChart from './PieChart';
import '../App.css';
import BarChart from './BarChart';

const Url = 'https://www.ag-grid.com/example-assets/space-mission-data.json';

const FetchData = () => {
    const [missions, setMissions] = useState([]);

    useEffect(() => {
        
        fetch(Url)
          .then(response => response.json())
          .then(data => setMissions(data))
          .catch(error => console.error('Error fetching data:', error));
      }, []);

      console.log(missions);

  return (
    <div>
      <h1>SpaceVue Dashboard</h1>
      <Dashboard missions={missions} />

      <div className="chart-container">
        <h2>Mission Result Pie Chart</h2>
        <PieChart missions={missions} />
      </div>


      <div className="chart-container">
        <h2>Company Mission Details</h2>
        <BarChart missions={missions} />
      </div>
    </div>
  )
}

export default FetchData