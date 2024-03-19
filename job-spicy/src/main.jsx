import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { BrowserRouter } from 'react-router-dom'
import JobsProvider from './context/JobsProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <JobsProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </JobsProvider>
  </React.StrictMode>,
)
