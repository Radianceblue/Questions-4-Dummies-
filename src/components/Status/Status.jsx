import './Status.css';
import { useGame } from '../../context/GameLogic';

function Status() {
  const { correct, incorrect } = useGame();

  return (
    <div className="status-box">
      <h3>Current count</h3>
      <p>Correct: {correct}</p>
      <p>Incorrect: {incorrect}</p>
    </div>
  );
}

export default Status;
