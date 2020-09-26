import React from 'react';
import { Link } from 'react-router-dom';
import Surveys from './surveys/Surveys';

const Dashboard = () => {
  return (
    <div>
      <Surveys />
      <div className="fixed-action-btn">
        <Link
          to="/surveys/new"
          className="btn-floating btn-large deep-orange accent-4"
        >
          <i className="material-icons">add</i>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
