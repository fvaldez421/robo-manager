import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import RobotsPage from '../Robots';


const Routes = props => (
  <>
    <Route path="/robots" component={RobotsPage} />
    <Redirect to="/robots" />
  </>
);

export default Routes;