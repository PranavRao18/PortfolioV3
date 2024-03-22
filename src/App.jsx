import React, { useEffect } from 'react'
import Home from './Sections/Home'
import About from './Sections/About'
import Navbar from './components/Navbar'

const App = () => {

  return (
    <div className='bg-primary'>
      <Navbar />
      <Home />
      <About />
    </div>
  )
}

export default App
