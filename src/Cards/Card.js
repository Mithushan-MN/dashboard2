import React from 'react';
import DashboardCard from './DashboardCard';
import './Card.css'
import { FaDollarSign, FaUser } from 'react-icons/fa';

const Card = () => {
  return (
    <div>
      <div className="dashboard-cards-container">
        <DashboardCard
          title="Earnings"
          value="$500"
    
          icon={<i><FaDollarSign /></i>} // Replace with your icon
        />
        <DashboardCard
          title="SALES STATS"
          value="70% Up  For 2021"

          icon={<i><FaUser/></i>} // Replace with your icon
        />
        <DashboardCard
          title="New Clients"
          value="450 within 30 days"
          icon={<i className="fas fa-shopping-cart"></i>} // Replace with your icon
        />
        <DashboardCard
          title="KPI"
          value="18"

          icon={<i className="fas fa-chart-pie"></i>} // Replace with your icon
        />
      </div>
    </div>
  );
};

export default Card;
