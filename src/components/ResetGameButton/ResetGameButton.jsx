import { useGame } from '../../context/GameLogic';
import './ResetGameButton.css';
import Button from 'react-bootstrap/Button';
   
  const ResetGameButton = () => {
    const {round, resetGame} = useGame();

    if (round != 10)
      return null;  //vi returerar inget ifall man är mitt i rundan.
  

    return ( 
    <div className="reset-game">
      <h2>Game over. </h2> 
      <Button className="Button btn-glow reset-btn" onClick={resetGame}> New round </Button>
    </div>

   );


  };
   
   
  export default ResetGameButton; 
   
   
 
   
  
