import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Form from './pages/Form';
import NewUser from './pages/NewUser';
import Perfil from './pages/Perfil';
import Visitante from './pages/Visitante';

const Routes = () => (
  <BrowserRouter>
    <Route component={Login} path="/" exact />
    <Route component={Dashboard} path="/dashboard" />
    <Route component={Form} path="/form" />
    <Route component={NewUser} path="/newuser" />
    <Route component={Visitante} path="/visitante" />
    <Route component={Perfil} path="/perfil" />
  </BrowserRouter>
);

export default Routes;
