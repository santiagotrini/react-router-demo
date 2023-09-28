import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Texto from './Texto.jsx'
import './index.css'
import { 
  BrowserRouter, 
  Routes, 
  Route 
} from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<App />} />
        <Route exact path='/Markdown' element={<Texto />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
