import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Header() {
  const {
    filterByName,
    filterByNumericValues,
    filterToApply,
    setFilterByNumericValues,
    setFilterByName,
    setFilterToApply,
  } = useContext(StarWarsContext);

  const handleChange = ({ target: { value } }) => {
    setFilterByName(value);
  };

  const handleChangeNumericFilters = ({ target: { value, id } }) => {
    setFilterToApply({
      ...filterToApply,
      [id]:value,
    });
  };

  const applyNewFilter = () => {
    setFilterByNumericValues([
      ...filterByNumericValues,
      filterToApply,
    ]);
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
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
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
          onClick={ applyNewFilter }
        >
          Filtrar
        </button>
      </form>
    </section>

  );
}

export default Header;
