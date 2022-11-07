import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './global/theme';
import Routes from './Routes';
import Provider from './provider';

function App() {
  useEffect(() => {
    document.title = "otPokemon Cz"
 }, []);
  return (
    <ThemeProvider theme={ theme }>
      <Provider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
