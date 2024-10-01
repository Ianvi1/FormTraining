import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Paths from './assets/routes/Route.tsx';
import '../index.css';
import { BrowserRouter } from 'react-router-dom';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Paths/>
    </BrowserRouter>
  </StrictMode>,
)



