import React, { useEffect, useContext } from 'react';
import { ThemeProvider } from 'styled-components';

import Provider from './provider';
import MyContext from './context/MyContext';
import Routes from './Routes';

import GlobalStyles from "./global/theme";
import { ligthTheme, darkTheme } from "./theme";

function App() {
  const { theme } = useContext(MyContext);

  useEffect(() => {
    document.title = "OTPokemon CZ"
 }, []);

  return (
    <Provider>
      <ThemeProvider theme={ theme === "light" ? ligthTheme : darkTheme}>
        <GlobalStyles />
        <Routes />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
