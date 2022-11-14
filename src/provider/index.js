import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import MyContext from '../context/MyContext';

export default function Provider({ children }) {
  const [theme, setTheme] = useState("light");

  const context = useMemo(() => {
    const themeToggler = () => {
      theme === "light" ? setTheme("dark") : setTheme("light")
    }

    return ({
      theme,
      setTheme,
      themeToggler,
    });
  }, [theme]);

  return (
    <MyContext.Provider value={ context }>
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};