import React from 'react'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div className='min-h-screen w-screen flex justify-center items-center flex-col bg-primary relative'>
      <Navbar />
      <div className='bg-gradient-to-b from-[#D9D6B2A9] to-transparent rounded-full w-[35rem] h-[35rem] absolute z-10'></div>
      <div className='bg-gradient-to-b from-[#96934510] to-transparent rounded-full w-[50rem] h-[50rem] absolute z-10'></div>
      <div className='p-8 sm:p-0 z-10'>
        <p className='text-textlight text-3xl sm:text-7xl tracking-widest text-left'>HELLO THERE, <span className='font-bold'>I'M</span></p>
        <p className='text-textlight text-8xl sm:text-[10rem] font-bold tracking-tighter mt-0 -sm:mt-10 -ml-1'>PRANAV RAO</p>
        <p className='text-textlight text-2xl text-left sm:text-center -sm:mt-8'>I'm a student and a full stack developer.</p>
      </div>

    </div>
    
  )
}

export default Home
