import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './modules/App.tsx'
import './App.sass'
import './css/style.css'

import 'boxicons/css/boxicons.min.css';



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />

  </React.StrictMode>,
)
