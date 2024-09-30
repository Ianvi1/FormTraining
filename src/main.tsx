import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx' 
import pageRoute from './assets/routes/Route.tsx';

import '../index.css';
import { BrowserRouter } from 'react-router-dom';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    <pageRoute/>
    </BrowserRouter>
  </StrictMode>,
)



