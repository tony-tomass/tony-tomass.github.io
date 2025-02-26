import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ProjectsPage from './ProjectsPage.tsx'

createRoot(document.getElementById('projects')!).render(
    <StrictMode>
      <ProjectsPage />
    </StrictMode>,
  )