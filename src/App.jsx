import QuestionCard from './components/QuestionCard.jsx/QuestionCard.jsx';
import Status from './components/Status/Status.jsx';
import Container from 'react-bootstrap/Container';
import NextQuestion from './components/NextQuestion/NextQuestion.jsx';
import FavoriteFacts from './components/FavoriteFacts/FavoriteFacts.jsx';

function App() {
  // const [correct, setCorrect] = useState(0);
  // const [incorrect, setIncorrect] = useState(0);
  // const handleUserAnswer = (selectedOption) => {
  //   if(selectedOption.isTrue) {
  //     // Släng in poäng hantering
  //   })
  // }o

  return (
    <Container>
      <div className="App">
        <h1 className="mt-2">Questions 4 Dummies</h1>
        <Status />
        <QuestionCard />
        <NextQuestion />
        <FavoriteFacts />
      </div>
    </Container>
  );
}

export default App;
