import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Cards from './components/Cards'
import './App.css'
export const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Cards />
    </div>
  )
}
export default App