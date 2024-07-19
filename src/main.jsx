import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Routing from './route/Routing.jsx'
import { GlobalStateProvider } from './context/GlobalStateContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStateProvider>
      <Routing />
    </GlobalStateProvider>
  </React.StrictMode>,
)
