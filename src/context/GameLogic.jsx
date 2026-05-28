import { createContext, useState,  useContext, useEffect} from 'react';

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

  const [favorites, setFavorites] = useState(() => {
    const savedFacts = localStorage.getItem("favorited-facts");
    
    if (savedFacts) {
      return JSON.parse(savedFacts);
    }

    return [];
  });

  const handleUserAnswer = (isTrue) => {
    if (isTrue) {
      setCorrect((prev) => prev + 1);
      console.log('Correct!');
    } else {
      setIncorrect((prev) => prev + 1);
      console.log('Incorrect!');
    }
  };

  const favoriteFact = (fact) => {
    const alreadyFavorited = favorites.find(
      (favorite) => favorite.id === fact.id
    );
    
    if (alreadyFavorited) {
      setFavorites(
        favorites.filter(
          (favorite) => favorite.id !== fact.id
        )
      );
    } else {
      setFavorites([...favorites, fact]);
    }
  };

  useEffect(() => {
    localStorage.setItem(
      "favorited-facts", JSON.stringify(favorites)
    );
  }

  )

  return (
    <GameContext.Provider value={{ correct, incorrect, handleUserAnswer, favorites, favoriteFact }}>
      {' '}
      {children}{' '}
    </GameContext.Provider>
  );
};
export const useGame = () => {
  return useContext(GameContext);
};
