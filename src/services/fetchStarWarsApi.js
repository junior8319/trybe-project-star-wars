const fetchStarWarsApi = async () => {
  const API_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const response = await fetch(API_URL);
  const jsonResponse = await response.json();
  return jsonResponse.results;
};

export default fetchStarWarsApi;
