import { useGame } from '../../context/GameLogic';
import { Badge } from 'react-bootstrap';
import './Status.css';

function Status() {
  const { correct, incorrect } = useGame();

  return (
    <div className="status-box">
      <h3>Current count</h3>
      <p>
        Correct:
        <Badge bg="success">{correct}</Badge>{' '}
      </p>
      <p>
        Incorrect: <Badge bg="danger">{incorrect}</Badge>{' '}
      </p>
    </div>
  );
}

export default Status;
