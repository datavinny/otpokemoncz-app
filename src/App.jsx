import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import Provider from './provider';
import Routes from './Routes';

import theme from './global/theme';

function App() {

  useEffect(() => {
    document.title = "OTPokemon CZ"
 }, []);

  return (
    <ThemeProvider theme={theme}>
      <Provider>
        <Routes />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
