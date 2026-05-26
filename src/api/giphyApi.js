const apiKey = import.meta.env.VITE_API_KEY;

async function getGiphs(query){
    const giphyResponse = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}`)

    const giphyData = await loadGifs.json();
    
    
    //ha felhantering. 

    
}