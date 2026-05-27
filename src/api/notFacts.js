const BASE_URL = 'https://notfacts.org/api?query=';


const getNotFact = async (query) => {
  const response = await fetch(`${BASE_URL}${encodeURIComponent(query)}`);
  if (!response.ok) {
    console.log(response.statusText);
    throw new Error('Could not fetch not facts');
  }
  const data = await response.json();
  return data.facts;
};
export { getNotFact };
