import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {

  return (
    <>
    <Navbar/>
    <div>
      <Hero/>
      <Footer/>
    </div>
    </>
  )
}

export default App
