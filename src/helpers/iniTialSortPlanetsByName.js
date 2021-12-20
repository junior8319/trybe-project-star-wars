const initialSortPlanetsByName = (receivedPlanets) => {
  receivedPlanets.sort((currPlanet, nextPlanet) => {
    const toFoward = 1;
    const toBack = -1;
    const toStay = 0;
    if (currPlanet.name > nextPlanet.name) return toFoward;
    if (currPlanet.name < nextPlanet.name) return toBack;
    return toStay;
  });
};

export default initialSortPlanetsByName;
