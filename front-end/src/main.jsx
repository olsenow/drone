import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Soar from './SOAR'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Soar />
  </StrictMode>
)
