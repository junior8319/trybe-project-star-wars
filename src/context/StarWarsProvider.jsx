import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import fetchStarWarsApi from '../services/fetchStarWarsApi';
import StarWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filterByName, setFilterByName] = useState([]);
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const [filterToApply, setFilterToApply] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });

  useEffect(() => {
    fetchStarWarsApi().then((response) => setData(response));
  }, []);

  const filteredByName = data
    .filter(({ name }) => name.toLowerCase().includes(filterByName));

  const contextValue = {
    filterByName,
    filteredByName,
    filterByNumericValues,
    filterToApply,
    setData,
    setFilterByName,
    setFilterByNumericValues,
    setFilterToApply,
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
