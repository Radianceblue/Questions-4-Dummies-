import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  //vi skapar en lista som kallas gifs, som sedan kan uppdateras automatiskt med useState, som är ett temporärt minne för komponenten. 
  const [gifs, setGifs] = useState([]); 
  const apiKey = import.meta.env.VITE_API_KEY;

  async function getGiphs(){
    // await väntar på att API:et ska skicka tillbaka ett svar.  
    const userPoints = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}`);
    
    //Här omvandlar vi svaret från JSON data till javaScript-objekt. 
    const data = await userPoints.json();
      console.log(data);
  }

  /*funktionen körs automatiskt när komponeten har laddats med useEffect.
    Den asynkrona funktionen inväntar att datan ska hämtas från API:et.
    När datan har hämtats sparas Gifsen i state med setGifs().
    Den tomma arrayen [] gör att useEffect ska köras en gång när komponenten renderas första gången. */
    useEffect(() => {
    async function loadGifs() {
        const gifs = await getGiphs();
        setGifs(gifs); // här sparas gifs som hämtats via api:et. 
      
    }
    loadGifs();
  
  }, [])

  return (<div>
        <h1>Hello World</h1>
        {/* Loopa igenom listan av gifs */}
    </div>)

}

export default App;
