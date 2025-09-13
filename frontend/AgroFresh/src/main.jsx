import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PathMapper from './PathMapper'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PathMapper/>
  </StrictMode>
)
