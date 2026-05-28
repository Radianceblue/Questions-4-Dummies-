import { createContext, useState, useContext, useEffect } from 'react';

const GameContext = createContext();

export const GameProvider = ({ children }) => {

  //Här håler vi reda på antal rätt svar.
  //När sidan laddas försöker vi först läsa in det värde som finns sparat i localstorage.
  const [correct, setCorrect] = useState(() => {

    //H'r hämtar vi tidigare sparad poäng.
    const correctAnswers = localStorage.getItem("correct-Answers");

    //om värdet finns sparat så gör vi om texten från localstorage till ett JavaScript värde.
    if(correctAnswers) {
      return JSON.parse(correctAnswers);
    }
    //om det inte finns ett sparat värde så börjar vi på 0.
    return 0;
  });

  //Här håler vi reda på antalet fel svar.
  //När sidan laddas försöker vi först läsa in det värde som finns sparat i localstorage.
  const [incorrect, setIncorrect] = useState(() => {
  const incorrectAnswers = localStorage.getItem("incorrect-Answers");

  if(IncorrectAnswers){
      return JSON.parse(incorrectAnswers);
    }
    return 0;
});

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
    const savedFacts = localStorage.getItem('favorited-facts');

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

  //Här bevakas state för correct. När det ändras så sparas det nya värdet i localStorage under nyckeln: "correct-Answers."
  useEffect(() =>{
    localStorage.setItem("correct-Answers", JSON.stringify(correct));
  }, [correct]
  );


  //Här bevakas state för incorrect. När det ändras så sparas det nya värdet i localStorage under nyckeln: "Incorrect-Answers."
  useEffect(()=>{
    localStorage.setItem("Incorrect-Answers", JSON.stringify(incorrect));
  },[incorrect]
);

  const favoriteFact = (fact) => {
    const alreadyFavorited = favorites.find((favorite) => favorite.id === fact.id);

    if (alreadyFavorited) {
      setFavorites(favorites.filter((favorite) => favorite.id !== fact.id));
    } else {
      setFavorites([...favorites, fact]);
    }
  }

  useEffect(() => {
    localStorage.setItem(
      "favorited-facts", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <GameContext.Provider value={{ correct, incorrect, round, handleUserAnswer, startRound, favorites, favoriteFact }}>
      {' '}
      {children}{' '}
    </GameContext.Provider>
  );
};
export const useGame = () => {
  return useContext(GameContext);
};


