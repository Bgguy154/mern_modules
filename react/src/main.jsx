import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Lecture 67 - Lifting State Up/App.jsx'
// import App from './Lecture 66 - Complex State Management/project_three/src/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
