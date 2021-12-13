import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function NumericFilters() {
  const { filterByNumericValues, setFilterByNumericValues } = useContext(StarWarsContext);

  const removeFilter = async (receivedcolumn) => {
    console.log(receivedcolumn);
    const newFiltersList = filterByNumericValues
      .filter(({ column }) => column !== receivedcolumn);
    console.log(newFiltersList);
    await setFilterByNumericValues(newFiltersList);
  };

  return (
    <div>
      <h3>Filtros:</h3>
      <div>
        {filterByNumericValues.length > 0 && filterByNumericValues
          .map(({ column, comparison, value }, index) => (
            <p
              data-testid="filter"
              key={ `${index}${column}${comparison}${value}` }
            >
              <span>{`${column} ${comparison} ${value}`}</span>
              <button
                type="button"
                onClick={ () => removeFilter(column) }
              >
                X
              </button>
            </p>
          ))}
      </div>
    </div>
  );
}

export default NumericFilters;
