import React from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom'
import App from './App.tsx'
import './index.css'

// createRoot(document.getElementById('root')!).render(
//   // <React.StrictMode>
//     <App />
//   // </React.StrictMode>,
// )

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  ,
    
  document.getElementById('root')
)