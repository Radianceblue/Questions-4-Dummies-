import QuestionCard from './components/QuestionCard.jsx/QuestionCard.jsx';
import randomFactsApi from './api/randomFactsApi.js';
import Status from "./components/Status/Status.jsx";
import FavoriteButton from "./components/FavoriteButton/FavoriteButton.jsx";

import './App.css'


function App() {
  //const [correct, setCorrect] = useState(0);
  //const [incorrect, setIncorrect] = useState(0);

  return (
    <div className="App">
      <h1>Questions 4 Dummies</h1>
      <Status correct={0} incorrect={0} />
      <QuestionCard />
    </div>
  );

}

export default App;
