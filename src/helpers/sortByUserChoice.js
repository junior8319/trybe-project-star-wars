const sortByUserChoice = ({ order: { column, sort } }, receivedPlanets) => {
  switch (sort) {
  case 'ASC':
    return receivedPlanets
      .sort((currPlanet, nextPlanet) => currPlanet[column] - nextPlanet[column]);
  case 'DESC':
    return receivedPlanets
      .sort((currPlanet, nextPlanet) => nextPlanet[column] - currPlanet[column]);
  default:
    break;
  }
};

export default sortByUserChoice;
