import React from 'react';
import './Card.css'; // Import your CSS file for styling

const DashboardCard = ({ title, value, description, icon }) => {
  return (
    <div className="dashboard-card">
      <div className="card-header">
      
        <h3 className="card-title">{title}</h3>
        <p className="card-value">{value}</p>
      </div>
      <div className="card-body">
     
        <span className="card-icon">{icon}</span>
      </div>
    </div>
  );
};

export default DashboardCard;
