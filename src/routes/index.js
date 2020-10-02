import React from 'react';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import { Header } from '../components/Header';

export const Routes = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dashboard" exact component={Dashboard} />
      </Switch>
    </Router>
  );
};
