import { useState, useEffect } from 'react';
import './QuestionCard.css';
import { getNotFact } from '../../api/notFacts';
import { randomFactsApi } from '../../api/randomFactsApi';
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import LetterA from '../../assets/LetterA.png';
import LetterB from '../../assets/LetterB.png';
import LetterC from '../../assets/LetterC.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useGame } from '../../context/GameLogic';

const questionLetters = [LetterA, LetterB, LetterC];
const extractWords = (text) => {
  const facts = text.split(' ').slice(0, 2).join(' ');
  return facts;
};
const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};
const QuestionCard = () => {
  const [facts, setFacts] = useState([]);
  const { handleUserAnswer } = useGame();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const randomFact = await randomFactsApi();
        const query = extractWords(randomFact);
        const notFacts = await getNotFact(query);

        const cardOptions = [
          {
            text: randomFact,
            isTrue: true,
          },
          ...notFacts.slice(0, 2).map((fact) => ({
            text: fact,
            isTrue: false,
          })),
        ];
        setFacts(shuffleArray(cardOptions));
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Row className="justify-content-center">
      <Col md={8}>
        <div className="cards">
          {facts.map((fact, index) => (
            <div
              className="card w-25 h-50 p-3 justify-content-center"
              key={index}
              onClick={() => handleUserAnswer(fact.isTrue)}
            >
              <div className="card-content">
                <div className="card-image">
                  <img src={questionLetters[index]} alt="a letter" />
                </div>
                <div className="card-info-wrapper">
                  <div className="card-info">
                    <h3>Option {index + 1} </h3>
                    <p className="h6">{fact.text}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Col>
    </Row>
  );
};

export default QuestionCard;
