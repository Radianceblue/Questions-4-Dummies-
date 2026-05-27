import './QuestionCard.css';
import { useState, useEffect } from 'react';
import { getNotFact } from '../../api/notFacts';
import { randomFactsApi } from '../../api/randomFactsApi';
import LetterA from '../../assets/LetterA.png';
import LetterB from '../../assets/LetterB.png';
import LetterC from '../../assets/LetterC.png';

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
                  <h3>Option {index + 1} </h3>
                  <h4>{fact.text}</h4>
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
