import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
import './Home.css';

gsap.registerPlugin(Draggable);

const Home = () => {
  const glowRingsRef = useRef([]);
  const draggableItemsRef = useRef([]);

  useEffect(() => {
    // Background pulsating animation
    glowRingsRef.current.forEach((ring, index) => {
      gsap.to(ring, {
        scale: 2.0,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    });

    // Draggable neon elements
    Draggable.create(draggableItemsRef.current, {
      type: 'x,y',
      bounds: window,
      inertia: true,
    });
  }, []);

  return (
    <div className="min-h-screen flex justify-center items-center bg-black relative overflow-hidden">
      {/* Neon Pulsating Background */}
      <div
        ref={(el) => (glowRingsRef.current[0] = el)}
        className="absolute rounded-full w-[30rem] h-[30rem] bg-gradient-to-r from-blue-500 to-purple-500 opacity-90 blur-sm shadow-neonBlue"
        style={{ top: '30%', left: '35%' }}
      ></div>
      {/* <div
        ref={(el) => (glowRingsRef.current[1] = el)}
        className="absolute rounded-full w-[40rem] h-[40rem] bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 opacity-40 blur-3xl"
        style={{ bottom: '25%', right: '35%' }}
      ></div> */}

      {/* Main Content */}
      <div className="z-10">
        <p className='text-white text-2xl sm:text-4xl tracking-widest text-left pa2 pb-4'>HELLO THERE, <span className='font-bold pa2'>I'M</span></p>
        <p className='text-white text-7xl sm:text-[8rem] font-bold tracking-tighter mt-0 -sm:mt-10 -ml-1 pa2 pb-2'>PRANAV RAO</p>
        <p className='text-white text-lg sm:text-xl text-left sm:text-center -sm:mt-8 pa2'>I'm a Computer Science Student in my Pre-Final Year.</p>
      </div>

      {/* Draggable Neon Elements */}
      <div
        ref={(el) => (draggableItemsRef.current[0] = el)}
        className="absolute w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-neonBlue z-10 cursor-pointer"
        style={{ top: '70%', left: '10%' }}
      ></div>
      <div
        ref={(el) => (draggableItemsRef.current[1] = el)}
        className="absolute w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-neonBlue z-10 cursor-pointer"
        style={{ bottom: '30%', right: '10%' }}
      ></div>
      <div
        ref={(el) => (draggableItemsRef.current[2] = el)}
        className="absolute w-28 h-28 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-neonBlue z-10 cursor-pointer"
        style={{ top: '20%', right: '15%' }}
      ></div>
      <div
        ref={(el) => (draggableItemsRef.current[3] = el)}
        className="absolute w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-neonBlue z-10 cursor-pointer"
        style={{ top: '25%', left: '15%' }}
      ></div>
      <div
        ref={(el) => (draggableItemsRef.current[4] = el)}
        className="absolute w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-neonBlue z-10 cursor-pointer"
        style={{ bottom: '10%', right: '30%' }}
      ></div>
    </div>
  );
};

export default Home;
