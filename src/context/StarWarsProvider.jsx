import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import filterData from '../helpers/filterData';
import initialSortPlanetsByName from '../helpers/iniTialSortPlanetsByName';
import sortByUserChoice from '../helpers/sortByUserChoice';
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
  const [sortToApply, setSortToApply] = useState({
    order: {
      column: 'name',
      sort: 'ASC',
    },
  });

  const getPlanetsOrderedByName = () => {
    fetchStarWarsApi().then((response) => {
      initialSortPlanetsByName(response);
      setData(response);
      // setFilteredData(generateFilteredData(response));
    });
  };

  useEffect(() => {
    getPlanetsOrderedByName();
  }, []);

  useEffect(() => {}, []);
  let filteredData = filterData(data, filterByName, filterByNumericValues);
  filteredData = sortByUserChoice(sortToApply, filteredData);

  const sendPlanetsToSort = (/* receivedPlanets */) => {
    // setFilteredData(sortByUserChoice(sortToApply, receivedPlanets));
  };

  const contextValue = {
    filterByName,
    filteredData,
    filterByNumericValues,
    filterToApply,
    sortToApply,
    setData,
    setFilterByName,
    setFilterByNumericValues,
    setFilterToApply,
    setSortToApply,
    sendPlanetsToSort,
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
