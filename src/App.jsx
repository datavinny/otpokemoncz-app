import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import Provider from './provider';

function App() {
  return (
      <Provider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Provider>
  );
}

export default App;