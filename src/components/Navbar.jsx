import React, { useState } from 'react';

const Overlay = ({ onClose }) => {
  return (
    <div className="fixed top-4 left-4 h-screen w-screen sm:w-1/2 md:w-1/3 bg-[#464335] flex items-center justify-center z-40 rounded-[30px] overlay overflow-hidden" onClick={onClose}>
    <div className='absolute w-[2000px] h-80 bg-[#DAD7C733] -rotate-[40deg] z-0 mt-80'></div>
      <div className="overlay-content text-primarylight z-10">
        <ul>
          <li className='text-7xl font-bold hover:text-[#262010] p-4'><a href='#home'>Home</a></li>
          <li className='text-7xl font-bold hover:text-[#262010] p-4'><a href='#home'>About</a></li>
          <li className='text-7xl font-bold hover:text-[#262010] p-4'><a href='#home'>Experience</a></li>
          <li className='text-7xl font-bold hover:text-[#262010] p-4'><a href='#home'>Projects</a></li>
          <li className='text-7xl font-bold hover:text-[#262010] p-4'><a href='#home'>Certificates</a></li>
          <li className='text-7xl font-bold hover:text-[#262010] p-4'><a href='#home'>Contact</a></li>
        </ul>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isCross, setIsCross] = useState(false);

  const handleClick = () => {
    setIsCross((prevIsCross) => !prevIsCross);
  };

  const handleCloseOverlay = () => {
    setIsCross(false);
  };

  return (
    <>
      <div
        className={`w-20 h-20 absolute top-4 sm:top-8 left-4 sm:left-8 navbar-icon z-50 rounded-full ${
          isCross ? 'cross bg-primary' : ''
        }`}
        onClick={handleClick}
      >
        <div className="rounded-full p-4 flex flex-col justify-evenly items-center h-full w-full">
          <div
            className={`w-12 h-1 bg-textlight rounded transition-transform ${
              isCross ? 'rotate-45 mt-0.5' : ''
            }`}
          ></div>
          <div
            className={`w-12 h-1 bg-textlight rounded transition-opacity ${
              isCross ? 'opacity-0' : ''
            }`}
          ></div>
          <div
            className={`w-12 h-1 bg-textlight rounded transition-transform ${
              isCross ? '-rotate-45 -mt-12' : ''
            }`}
          ></div>
        </div>
      </div>
      <div className='p-8'>{isCross && <Overlay onClose={handleCloseOverlay} />}</div>      
    </>
  );
};

export default Navbar;
