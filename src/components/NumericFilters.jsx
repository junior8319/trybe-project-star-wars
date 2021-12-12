import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function NumericFilters() {
  const { filterByNumericValues } = useContext(StarWarsContext);

  return (
    <div>
      <h3>Filtros:</h3>
      <div>
        {filterByNumericValues && filterByNumericValues
          .map(({ column, comparison, value }, index) => (
            <p
              key={ `${index}${column}${comparison}${value}` }
            >
              {`${column} ${comparison} ${value}`}
            </p>
          ))}
      </div>
    </div>
  );
}

export default NumericFilters;
