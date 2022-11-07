import React from 'react';
import { Route, Routes as Switch, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Download from './pages/Download';

function Routes() {
  return (
    <div>
      <main>
        <Switch>
          <Route exact path="otpokemoncz-app/" element={ <Navigate to="/login" /> } />
          <Route exact path="/login" element={ <Login /> } />
          <Route exact path="/register" element={ <Register /> } />
          <Route exact path="/download" element={ <Download /> } />
        </Switch>
      </main>
    </div>
  );
}

export default Routes;
