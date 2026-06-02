import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// import QuestionCard from './components/QuestionCard.jsx/QuestionCard.jsx';
import App from './App.jsx';
import { GameProvider } from './context/GameLogic.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GameProvider>
      <App />
      {/* <LoadGifs /> */}
    </GameProvider>
  </StrictMode>,
);
