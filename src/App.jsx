import React, { useEffect } from 'react'
import Home from './Sections/Home'
import About from './Sections/About'
import Navbar from './components/Navbar'
import Experience from './Sections/Experience'
import Projects from './Sections/Projects'
import Coding from './Sections/Coding'
import Certificates from './Sections/Certificates'

const App = () => {

  return (
    <div className='bg-primary'>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Coding />
      <Certificates />
    </div>
  )
}

export default App
