import React from 'react'
import Header from './Components/Header'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Menu from './Components/Layouts/menu'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Homepage from './Pages/Homepage'

function App() {
  return (
    <BrowserRouter>
      <div className="landing_page">
        <> </>

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
{
  /* <BrowserRouter>
      <div className="container">
        <Header />
        <Main />
        <Footer />
      </div>
    </BrowserRouter> */
}
