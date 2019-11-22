import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import RobotsPage from './containers/Robots';
import DashboardPage from './containers/Dashboard';


const Router = props => (
  <BrowserRouter>
    {/* <Route to="/dashboard" component={DashboardPage} /> */}
    <Route to="/robots" component={RobotsPage} />
    <Redirect to="/robots" />
  </BrowserRouter>
);

export default Router;