import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes as Switch, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Download from './pages/Download';
import Shinies from './pages/Shinies';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="otpokemoncz-app/" element={ <Navigate to="/login" /> } />
        <Route exact path="/" element={ <Navigate to="/login" /> } />
        <Route exact path="/login" element={ <Login /> } />
        <Route exact path="/register" element={ <Register /> } />
        <Route exact path="/download" element={ <Download /> } />
        <Route exact path="/shinies" element={ <Shinies /> } />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
