import { createContext, useState, useContext } from 'react';

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [round, setRound] = useState(0);

  const startRound = () => {
    setRound((prev) => {
      const nextRound = prev + 1;
      if (round >= 10) {
        console.log('Game Over!');
        return 10;
      }
      return nextRound;
    });
  };

  const handleUserAnswer = (isTrue) => {
    if (isTrue) {
      setCorrect((prev) => prev + 1);
      console.log('Correct!');
    } else {
      setIncorrect((prev) => prev + 1);
      console.log('Incorrect!');
    }
  };
  return (
    <GameContext.Provider value={{ correct, incorrect, handleUserAnswer, startRound, round }}>
      {' '}
      {children}{' '}
    </GameContext.Provider>
  );
};
export const useGame = () => {
  return useContext(GameContext);
};
