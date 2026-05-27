const url = 'https://uselessfacts.jsph.pl/api/v2/facts/random';

async function randomFactsApi() {
  const api_response = await fetch(url);

  if (!api_response.ok) {
    throw new Error('Connection to Useless Facts failed');
  }

  const jsonData = await api_response.json();

  return jsonData.text;
}
export { randomFactsApi };
