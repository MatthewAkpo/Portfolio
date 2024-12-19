import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Portfolio from './Portfolio'
import App from './App'
import Port2 from './Port2'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Portfolio  /> */}
    {/* <App/> */}
    <Port2/>  
  </StrictMode>,
)