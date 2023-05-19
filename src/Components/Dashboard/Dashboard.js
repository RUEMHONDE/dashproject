import React, { useEffect } from 'react';
import Sidenav from '../CommonComponents/Sidenav/Sidenav';
import Header from '../CommonComponents/Header/Header';
import "./Dashboard.css";
import Welcome from '../CommonComponents/Welcome/Welcome';
import ChartCard from '../CommonComponents/ChartCard/ChartCard';
import LineCharts from '../CommonComponents/LineCharts/LineCharts';
import Histogram from '../CommonComponents/Histogram/Histogram';
import PieCharts from '../CommonComponents/PieCharts/PieCharts';
import {isExpired, decodeToken} from "react-jwt";
export default function Dashboard() {
  const arr = [1, 2, 3];

 

  return (
    <div>
      <div className='dashboard-container'>        
        <div className='welcome-info'>
          <Welcome />
          <ChartCard />
          </div>
          <div className='line-chart'>
            {arr.map((elem) =>( <LineCharts elem={elem} />))}          
          </div>
          <div className='more-charts'>
            <Histogram />
            <PieCharts />
          </div>
        </div>
      
    </div>
  );
}
