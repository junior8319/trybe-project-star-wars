const filterData = (data, filterByName, filterByNumericValues) => {
  let filteredData = data
    .filter(({ name }) => name.toLowerCase().includes(filterByName));

  // console.log(filteredData);

  if (filterByNumericValues.length > 0) {
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
  }
  return filteredData;
};

export default filterData;
