import React from 'react';
import pranav from '../assets/images/pranav.jpg';
import Education from '../components/Education';
import { motion } from 'framer-motion';
import { textVariant } from '../constants/motion';
import { SectionWrapper } from '../hoc';

const About = () => {
    return (
        <motion.div variants={textVariant()} className='bg-black flex flex-col justify-center rounded-[50px] p-8 pt-12 sm:p-20 sm:pb-8 relative overflow-hidden'>
            <motion.h1 className='text-textdark1 text-6xl sm:text-8xl font-semibold text-center p-0 sm:p-8'>ABOUT ME</motion.h1>
            <motion.div variants={textVariant(0.8)} className='bg-gradient-to-b from-[#C9C6B2DD] to-transparent rounded-full w-[15rem] sm:w-[35rem] h-[15rem] sm:h-[35rem] absolute top-[25rem] sm:top-72 -right-10 sm:right-10 z-10 overflow-hidden'></motion.div>
            <motion.div variants={textVariant(0.4)} className='bg-gradient-to-b from-[#464335DD] to-transparent rounded-full w-[25rem] sm:w-[40rem] h-[25rem] sm:h-[40rem] absolute top-[20rem] sm:top-40 -right-28 sm:-right-20 z-10 overflow-hidden'></motion.div>
            <motion.div variants={textVariant(1.4)} className='bg-gradient-to-b from-[#464335DD] to-transparent rounded-full w-[20rem] sm:w-[50rem] h-[20rem] sm:h-[50rem] absolute -bottom-32 sm:-bottom-36 -left-32 sm:-left-44 z-10'></motion.div>
            <motion.div variants={textVariant(1.8)} className='bg-gradient-to-b from-[#C9C6B2DD] to-transparent rounded-full w-[15rem] sm:w-[35rem] h-[15rem] sm:h-[35rem] absolute -bottom-28 sm:-bottom-12 -left-28 sm:-left-20 z-10'></motion.div>
            <div className='flex flex-col p-8 flex-wrap lg:flex-row z-20'>
                <motion.div variants={textVariant(0.5)} className='lg:flex-1 flex justify-center lg:justify-end items-center'>
                    <img src={pranav} alt='image' className='w-[90vw] sm:w-[50vw] md:w-[25vw] rounded-[20px]'></img>
                </motion.div>
                <motion.div variants={textVariant(0.5)} className='lg:flex-1 flex items-center'>
                    <p className='text-textdark2 sm:text-xl sm:leading-9 px-0 py-8 sm:p-20'>I am a dedicated MERN stack developer currently pursuing a Bachelor's degree in Computer Science at BMS College of Engineering in Bangalore. Proficient in MongoDB, Express.js, React.js, and Node.js, I have actively applied these skills in projects. I am deeply interested in the fusion of web development and machine learning, continually expanding my knowledge in both areas. A regular participant in hackathons, I thrive in high-pressure environments, showcasing problem-solving abilities and collaborative teamwork. I am now actively seeking new opportunities to contribute my skills and passion for innovation. Beyond my technical prowess, I engage with the tech community through extracurricular activities, such as participating in clubs and attending workshops. Outside of coding, I find solace in my love for music, which adds a creative dimension to my personality.</p>
                </motion.div>
            </div>
            <motion.div variants={textVariant(1)} className='sm:p-12 z-20'>
                <motion.h1 className='text-textdark1 text-5xl sm:text-6xl font-semibold text-center p-0 sm:p-8'>Education</motion.h1>
                <Education />
            </motion.div>
        </motion.div>
    );
}

export default SectionWrapper(About, 'about');
