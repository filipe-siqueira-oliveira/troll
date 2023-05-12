import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Rotas from './routes/Rotas.jsx'
import './global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Rotas/>
    <App />
  </React.StrictMode>,
)
