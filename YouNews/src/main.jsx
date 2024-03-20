import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SearchProvider from './Context/SearchProvider.jsx'
import TrendingProvider from './Context/TrendingProvider.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SearchProvider>
     <App />
  </SearchProvider>,
)
