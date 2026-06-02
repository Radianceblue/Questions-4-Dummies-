const apiKey = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.giphy.com/v1/gifs/search?api_key="


async function getGiphs(query){
    const giphResponse = await fetch(`${BASE_URL}${apiKey}&q=${query}&limit=1`)

    if(!giphResponse.ok) {
        throw new Error("Failed to load Giphs")
        
    } const giphyData = await giphResponse.json();
    
    console.log(giphyData);

    return giphyData.data;
  

    
}

export default getGiphs;