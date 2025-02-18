import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Router } from './router/Router'
import 'bulma/css/bulma.min.css';
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router />
  </StrictMode>,
)
