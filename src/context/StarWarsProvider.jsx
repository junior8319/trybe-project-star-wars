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

  let filteredData = data
    .filter(({ name }) => name.toLowerCase().includes(filterByName));

  filterByNumericValues.forEach(({ column, comparison, value }) => {
    if (comparison === 'maior que') {
      filteredData = filteredData.filter((planet) => (
        Number(planet[column]) > Number(value)
      ));
    } else if (comparison === 'menor que') {
      filteredData = filteredData.filter((planet) => (
        Number(planet[column]) < Number(value)
      ));
    } else if (comparison === 'igual a') {
      filteredData = filteredData.filter((planet) => (
        Number(planet[column]) === Number(value)
      ));
    }
  });

  const contextValue = {
    filterByName,
    filteredData,
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
