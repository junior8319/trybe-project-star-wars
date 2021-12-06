import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import fetchStarWarsApi from '../services/fetchStarWarsApi';
import StarWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchStarWarsApi().then((response) => setData(response));
  }, []);

  const contextValue = {
    data,
  };

  return (
    <StarWarsContext.Provider value={ contextValue }>
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
