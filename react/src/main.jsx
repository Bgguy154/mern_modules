import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
// import App from './Lecture 67 - Lifting State Up/App.jsx'
// import App from './Lecture 66 - Complex State Management/project_three/src/App.jsx'
// import App from "./Lecture 68 - UseEffect Basics/App.jsx"
// import App from './Lecture 69 - UseEffect/App.jsx'
// import App from './Lecture 70 - useEffect Advanced/App.jsx'
// import App from "./Lecture 73 - React Router/App.jsx"
import App1 from './Lecture 73 - React Router/App1'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StrictMode>
    <App1 />
  </StrictMode>
  </BrowserRouter>,
)
