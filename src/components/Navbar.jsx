import React from 'react'

const Navbar = () => {
  return (
    <div className='w-20 h-20 absolute top-4 sm:top-8 left-4 sm:left-8'>
      <div className='rounded-full p-4 flex flex-col justify-evenly items-center h-full w-full'>
        <div className='w-12 h-1 bg-textlight rounded'></div>
        <div className='w-12 h-1 bg-textlight rounded'></div>
        <div className='w-12 h-1 bg-textlight rounded'></div>
      </div>
    </div>
  )
}

export default Navbar
