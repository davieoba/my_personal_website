import React from 'react'

import About from './Pages/About'
import Menu from './Components/Layouts/menu'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'

function App() {
  return (
    <BrowserRouter>
      <div className="landing_page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
