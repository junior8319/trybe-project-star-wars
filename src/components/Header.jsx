import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import NumericFilters from './NumericFilters';

function Header() {
  const {
    filterByName,
    filterByNumericValues,
    filterToApply,
    setFilterByNumericValues,
    setFilterByName,
    setFilterToApply,
  } = useContext(StarWarsContext);

  let baseFilterColumns = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const sortColumns = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const currentFilterColumns = [];

  const setToNextFilter = () => {
    setFilterToApply({
      column: baseFilterColumns[1],
      comparison: 'maior que',
      value: 0,
    });
  };

  if (filterByNumericValues.length > 0) {
    filterByNumericValues.forEach(({ column }) => {
      currentFilterColumns.push(column);
    });
  }
  const isNotApplied = (filterColumn) => !currentFilterColumns.includes(filterColumn);

  baseFilterColumns = baseFilterColumns
    .filter((filterColumn) => isNotApplied(filterColumn));

  const handleChange = ({ target: { value } }) => {
    setFilterByName(value);
  };

  const handleChangeNumericFilters = ({ target: { value, id } }) => {
    setFilterToApply({
      ...filterToApply,
      [id]: value,
    });
  };

  const addNewFilter = () => {
    setFilterByNumericValues([
      ...filterByNumericValues,
      filterToApply,
    ]);
    setToNextFilter();
  };

  return (
    <section>
      <form>
        <label htmlFor="name-filter">
          Filtrar por nome:
          <input
            data-testid="name-filter"
            id="name-filter"
            type="text"
            onChange={ handleChange }
            value={ filterByName }
          />
        </label>
      </form>
      <form>
        <select
          data-testid="column-filter"
          name="column-filter"
          id="column"
          value={ filterToApply.column }
          onChange={ (event) => handleChangeNumericFilters(event) }
        >
          {baseFilterColumns.map((column, index) => (
            <option value={ column } key={ `${index}${column}` }>{column}</option>
          ))}
        </select>

        <select
          data-testid="comparison-filter"
          name="comparison-filter"
          id="comparison"
          value={ filterToApply.comparison }
          onChange={ (event) => handleChangeNumericFilters(event) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>

        <input
          id="value"
          data-testid="value-filter"
          type="number"
          value={ filterToApply.value }
          onChange={ (event) => handleChangeNumericFilters(event) }
        />
        <button
          data-testid="button-filter"
          type="button"
          onClick={ addNewFilter }
        >
          Filtrar
        </button>
      </form>
      <article>
        <NumericFilters />
      </article>
      <article>
        <select
          data-testid="column-sort"
          name="column-sort"
          id="sort"
        >
          {sortColumns.map((column, index) => (
            <option value={ column } key={ `${index}${column}` }>{ column }</option>
          ))}
        </select>
        <label htmlFor="sort-asc">
          ASC
          <input
            data-testid="column-sort-input-asc"
            type="radio"
            name="sort"
            id="sort-asc"
          />
        </label>
        <label htmlFor="sort-desc">
          DESC
          <input
            data-testid="column-sort-input-desc"
            type="radio"
            name="sort"
            id="sort-desc"
          />
        </label>
        <button
          data-testid="column-sort-button"
          type="button"
        >
          Ordenar
        </button>
      </article>
    </section>

  );
}

export default Header;
