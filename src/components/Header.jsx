import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Header() {
  const { filterByName, filterByNumericValues, setFilterByNumericValues, setFilterByName } = useContext(StarWarsContext);

  const handleChange = ({ target: { value } }) => {
    setFilterByName(value);
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
        >
          <option value="population" selected>population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>

        <select
          data-testid="comparison-filter"
          name="comparison-filter"
        >
          <option value="maior que" selected>maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>

        <input data-testid="value-filter" type="number" name="value-filter" />
        <button data-testid="button-filter" type="button">Filtrar</button>
      </form>
    </section>

  );
}

export default Header;
