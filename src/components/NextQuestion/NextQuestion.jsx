import { useGame } from '../../context/GameLogic';
import './NextQuestion.css';
import Button from 'react-bootstrap/Button';

const NextQuestion = () => {
  const { startRound, round } = useGame();

  const handleNextQuestion = () => {
    startRound();
  };
  return (
    <div className="next-question-container">
      <p className="mt-"> Round {round} of 10</p>
      <Button className="Button btn-glow" onClick={handleNextQuestion}>
        Next Question
      </Button>
    </div>
  );
};
export default NextQuestion;
