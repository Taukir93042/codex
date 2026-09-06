import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import CourseProvider from './context/Appcontext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <CourseProvider>
      <StrictMode>

        <App />
      </StrictMode>
    </CourseProvider>

  </BrowserRouter>

)
