import './QuestionCard.css';
import { useState, useEffect } from 'react';
import { getNotFact } from '../../api/notFacts';
import LetterA from '../../assets/LetterA.png';
import LetterB from '../../assets/LetterB.png';
import LetterC from '../../assets/LetterC.png';

const questionLetters = [LetterA, LetterB, LetterC];

const QuestionCard = () => {
  const [facts, setFacts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getNotFact('random');
        setFacts(data.slice(0, 3));
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="cards">
      {facts.map((fact, index) => (
        <div className="card" key={index}>
          <div className="card-content">
            <div className="card-image">
              <img src={questionLetters[index]} alt="a letter" />
            </div>
            <div className="card-info-wrapper">
              <div className="card-info">
                <div className="card-info-title">
                  <h3>NotFact {index + 1} </h3>
                  <h4>{fact}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuestionCard;
