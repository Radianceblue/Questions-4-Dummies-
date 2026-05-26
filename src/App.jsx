import { useState } from 'react'

import randomFactsApi from './api/randomFactsApi.js';
import Status from "./components/Status.jsx"

import './App.css'

function App() {
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);

  return (
    <Status correct={correct} incorrect={incorrect} />
  );
}

export default App
