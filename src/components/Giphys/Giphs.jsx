import { useState, useEffect } from 'react';
import getGiphs from '../../api/giphyApi';
import { useGame } from "../../context/GameLogic";


function LoadGifs () {

  //vi skapar en lista som kallas gifs, som sedan kan uppdateras automatiskt med useState, som är ett temporärt minne för komponenten. 
  const [gifs, setGifs] = useState([]); 

  async function FetchGiphs(){
    // await väntar på att API:et ska skicka tillbaka ett svar.  
    const userPoints = await getGiphs();
    
    //Här omvandlar vi svaret från JSON data till javaScript-objekt. 
    const data = await userPoints.json();
      console.log(data);
  }
  
  //Hämtar objektet game från GameContext via useGame().
  const game = useGame();

  //State som sparar texten som visas baserat på användarens resultat.
  const [resultSlogan, setResultSlogan] = useState("");
  console.log(resultSlogan);
  /*funktionen körs automatiskt när komponeten har laddats med useEffect.
    Den asynkrona funktionen inväntar att datan ska hämtas från API:et.
    När datan har hämtats sparas Gifsen i state med setGifs().
    Den tomma arrayen [] gör att useEffect ska köras en gång när komponenten renderas första gången. */
    
    useEffect(() => {
    async function FetchGiphsForResult() {
      if(game.correct <= 5) {
        const gifs = await getGiphs("pudgy penguins stone knife sharpening");
        setGifs(gifs); // här sparas gifs som hämtats via api:et. 
        setResultSlogan("You are not the sharpest knife in the toolbox are you");         
      } 
      else if(game.correct >= 6 && game.correct <=8){
        const gifs = await getGiphs("goose");
        setGifs(gifs);
        setResultSlogan("Not to bad, you silly goose!");
      }
      else if (game.correct >= 9){
        const gifs = await getGiphs("dancing cookie");
        setGifs(gifs);
        setResultSlogan("Hey! We have a smart cookie, or maybe you just got lucky?!");
      }
    }
    FetchGiphsForResult();
  
  }, []);

console.log(gifs[0]); 

  return (
  <div>
        <h3>Your results</h3> 
        <p> { resultSlogan } </p>
        { gifs.map((gif) => (
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
