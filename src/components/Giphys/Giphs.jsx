import { useState, useEffect } from 'react';
import getGiphs from '../../api/giphyApi';


function LoadGifs () {

  //vi skapar en lista som kallas gifs, som sedan kan uppdateras automatiskt med useState, som är ett temporärt minne för komponenten. 
  const [gifs, setGifs] = useState([]); 

  async function LoadGiphs(){
    // await väntar på att API:et ska skicka tillbaka ett svar.  
    const userPoints = await getGiphs();
    
    //Här omvandlar vi svaret från JSON data till javaScript-objekt. 
    const data = await userPoints.json();
      console.log(data);
  }

  /*funktionen körs automatiskt när komponeten har laddats med useEffect.
    Den asynkrona funktionen inväntar att datan ska hämtas från API:et.
    När datan har hämtats sparas Gifsen i state med setGifs().
    Den tomma arrayen [] gör att useEffect ska köras en gång när komponenten renderas första gången. */
    useEffect(() => {
    async function LoadGifs() {
        const gifs = await getGiphs("knife");
        setGifs(gifs); // här sparas gifs som hämtats via api:et. 
          
        console.log(gifs)
    }
    LoadGifs();
  
  }, []);

console.log(gifs[0]); 

  return (
  <div>
        <h3>Your results</h3> 
        <p>You are not the sharpest knife in the toolbox are you</p>
        {/* Loopa igenom listan av gifs */
        gifs.map((gif) => (
        <div key={gif.id}>
          <img 
          src={gif.images.fixed_height.url}
          alt={gif.title}
          />
        </div>
    ))}
  </div>
  );
}

export default LoadGifs;
