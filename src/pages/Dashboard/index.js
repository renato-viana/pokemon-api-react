import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from './styles.js';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard page</h1>
      <Link to="/">
        <Button>Home</Button>
      </Link>
    </div>
  );
};

export default Dashboard;
