import QuestionCard from './components/QuestionCard.jsx/QuestionCard.jsx';
import Status from './components/Status/Status.jsx';
import Container from 'react-bootstrap/Container';
import NextQuestion from './components/NextQuestion/NextQuestion.jsx';
import Giphs from './components/Giphys/Giphs.jsx';
import ResetGameButton from './components/ResetGameButton/ResetGameButton.jsx';
import FavoriteFacts from './components/FavoriteFacts/FavoriteFacts.jsx';
import { useGame } from '../src/context/GameLogic.jsx';

function App() {
  const game = useGame();

  if(game.round >=10){
    return (
      <div>
        <h1 className="mt-2">Questions 4 Dummies</h1>
        <Status />
        <ResetGameButton />
        <Giphs />
        <FavoriteFacts />   
      </div>)
  }  else   {

      return (
      <div className="App">
        <h1 className="mt-2">Questions 4 Dummies</h1>
        <Status />
        <QuestionCard />
        <NextQuestion />
        <ResetGameButton />
        <Giphs />
        <FavoriteFacts />
      </div>
    );
  } 
}



export default App;
