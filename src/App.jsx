import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Navbar from './components/nav'
import About from './pages/about'
import Footer from './components/footer'
import Contact from './pages/contact'
import StudyBot from './pages/studyBot'
import ScrollToTop from './utils/scrollToTop'


export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/about" element={ <About />} />
        <Route path="/studybot" element={ <StudyBot />} />
        <Route path="/contact" element={ <Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
