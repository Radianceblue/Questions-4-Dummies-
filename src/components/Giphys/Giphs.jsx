import { useState, useEffect } from 'react';
import getGiphs from '../../api/giphyApi';
import { useGame } from "../../context/GameLogic";
import { Modal, Button, Spinner } from 'react-bootstrap';
import ResetGameButton from '../ResetGameButton/ResetGameButton';
import "./Giphs.css";

/* Denna komponent hämtar och visar olika GIFs när spelrundan avslutats. 
  gifs - är listan med Gif-objekt som ska visas. 
  resultatSlogan - text med olika citat som beskriver spelarens "dummie status". 
  Spelets status hämtas via useGame(). 
  När 10 rundor har spelats väljs en query och slogan baserat på antal rätt. 
  Hämtar GIFs från API:et och sparar de i state. 
  Har även felhantering om något går fel vid API anrop.*/  

function LoadGifs () {
  //vi skapar en lista som kallas gifs, som sedan kan uppdateras automatiskt med useState, som är ett temporärt minne för komponenten. 
  const [gifs, setGifs] = useState([]); 
  
  //Hämtar objektet game från GameContext via useGame().
  const game = useGame();

  //State som sparar texten som visas baserat på användarens resultat.
  const [resultSlogan, setResultSlogan] = useState("");
  const [isLoading, setIsLoading] = useState(false);
    
    const isGameOver = game.round === 10;
    useEffect(() => {
      if (!isGameOver)
      return; 
    
    async function FetchGiphsForResult() {

      try {
        setIsLoading(true);

        let query = "";
        let slogan = "";

      if(game.correct <= 5) {
        query = "pudgy penguins stone knife sharpening";
        slogan = "You are not the sharpest knife in the toolbox are you";         
      } 
      else if(game.correct >= 6 && game.correct <=8){
        query= "goose";
        slogan = "Not to bad, you silly goose!";
      }
      else {
        query = "dancing cookie";
        slogan = "Hey! We have a smart cookie, or maybe you just got lucky?!";
      }
      const gifs = await getGiphs(query);
      setGifs(gifs);
      setResultSlogan(slogan);
    } catch(error) {
      console.error('Error fetching gifs:', error);
    } finally {
      setIsLoading(false);
    }   
  }
  FetchGiphsForResult() 
}, [isGameOver, game.correct]);

  return (
    <Modal
      show={isGameOver}
      centered
      backdrop='static'
      keyboard={false}
      className='game-result-modal'
    >
      <Modal.Header>
        <Modal.Title> Your results </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p className='result-score'>Correct: {game.correct} / 10</p>
        <p className='result-slogan'>{resultSlogan}</p>

        

        {isLoading && (
          <div className='gif-loading'>
            <Spinner animation='border'/>
          </div>
        )}

        {!isLoading &&
          gifs.map((gif) => (
            <div key={gif.id} className='gif-wrapper'>
              <img 
              src={gif.images.fixed_height.url}
              alt={gif.title}
              className='GIF-result'
              />
            </div>
          ))}
      </Modal.Body>

      <Modal.Footer className='result-footer'>
        <ResetGameButton />
      </Modal.Footer>
      </Modal>
    );
  }

export default LoadGifs;
