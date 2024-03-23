import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { AnimatePresence } from 'framer-motion'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AnimatePresence
    mode='wait'
  >
    <App />
  </AnimatePresence>
)
