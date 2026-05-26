import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import QuestionCard from './components/QuestionCard.jsx/QuestionCard.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QuestionCard />
  </StrictMode>,
);
