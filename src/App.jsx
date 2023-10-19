import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'

import Footer from './components/Footer/Footer'
import './App.css'

function App() {

  return (
    <div className="app">
      <Navbar/>
      <Hero/>
      <Footer/>
    </div>
  )
}

export default App
