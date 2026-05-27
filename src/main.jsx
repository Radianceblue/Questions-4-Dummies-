import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LoadGifs from './components/Giphys/Giphs.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoadGifs />

  </StrictMode>,
)
