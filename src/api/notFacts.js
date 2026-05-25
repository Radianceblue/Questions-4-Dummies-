const BASE_URL = 'https://notfacts.org/api?query="random"';

const getNotFact = async () => {
  const response = await fetch(`${BASE_URL}`);
  const data = await response.json();
  return data;
};
export { getNotFact };
