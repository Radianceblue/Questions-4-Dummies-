import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
// import QuestionCard from './components/QuestionCard.jsx/QuestionCard.jsx';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*<LoadGifs />*/}

  </StrictMode>,
);
