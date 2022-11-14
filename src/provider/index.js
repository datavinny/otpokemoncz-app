import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import MyContext from '../context/MyContext';

export default function Provider({ children }) {
  const [points, setPoints] = useState(0);
  const context = useMemo(() => {

    return ({
      points,
      setPoints,
    });
  }, [points]);

  return (
    <MyContext.Provider value={ context }>
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};