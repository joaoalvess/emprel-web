import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import NewUser from './pages/NewUser';

const Routes = () => (
  <BrowserRouter>
    <Route component={Login} path="/" exact />
    <Route component={Dashboard} path="/dashboard" />
    <Route component={NewUser} path="/newuser" />
  </BrowserRouter>
);

export default Routes;
