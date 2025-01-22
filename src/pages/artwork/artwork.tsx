import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import LightGalleryApp from './LightGalleryApp.tsx'

createRoot(document.getElementById('gallery')!).render(
  <StrictMode>
    <LightGalleryApp />
  </StrictMode>,
)
