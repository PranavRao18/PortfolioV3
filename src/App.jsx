import React, { useEffect } from 'react'
import Home from './Sections/Home'
import About from './Sections/About'
import Navbar from './components/Navbar'
import Experience from './Sections/Experience'
import Projects from './Sections/Projects'

const App = () => {

  return (
    <div className='bg-primary'>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Projects />
    </div>
  )
}

export default App
