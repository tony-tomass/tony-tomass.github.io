import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HomePage from './HomePage.tsx'

createRoot(document.getElementById('nav')!).render(
    <StrictMode>
      <HomePage />
    </StrictMode>,
  )