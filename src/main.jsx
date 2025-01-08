import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import SettingsContext from './contexts/settingsContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <SettingsContext>
        <App />
      </SettingsContext>

    </BrowserRouter>

  </StrictMode>,
)
