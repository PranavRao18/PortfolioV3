import React from 'react';
import pranav from '../assets/images/me.jpg';
import Education from '../components/Education';
import { motion } from 'framer-motion';
import { fallText, textVariant } from '../constants/motion';
import { SectionWrapper } from '../hoc';
import AnimatedTitle from '../components/AnimatedTitle';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

const CustomBullet = ({ children }) => (
    <li className="text-textdark2 sm:text-xl sm:leading-9 px-0 py-2 sm:py-2 sm:px-20 flex items-start">
        <DoubleArrowIcon className="text-amber-200 mr-2 sm:mt-[6px]" size={10} />
        <span>{children}</span>
    </li>
);

const About = () => {
    return (
        <motion.div variants={textVariant()} className='bg-black flex flex-col justify-center rounded-[50px] p-8 pt-12 sm:p-20 sm:pb-8 relative overflow-hidden'>
            <AnimatedTitle text={"ABOUT ME"} />
            <motion.div variants={textVariant(0.8)} className='bg-gradient-to-b from-[#C9C6B2DD] to-transparent rounded-full w-[15rem] sm:w-[35rem] h-[15rem] sm:h-[35rem] absolute top-[25rem] sm:top-72 -right-10 sm:right-10 z-10 overflow-hidden'></motion.div>
            <motion.div variants={textVariant(0.4)} className='bg-gradient-to-b from-[#464335DD] to-transparent rounded-full w-[25rem] sm:w-[40rem] h-[25rem] sm:h-[40rem] absolute top-[20rem] sm:top-40 -right-28 sm:-right-20 z-10 overflow-hidden'></motion.div>
            <motion.div variants={textVariant(1.4)} className='bg-gradient-to-b from-[#464335DD] to-transparent rounded-full w-[20rem] sm:w-[50rem] h-[20rem] sm:h-[50rem] absolute -bottom-32 sm:-bottom-36 -left-32 sm:-left-44 z-10'></motion.div>
            <motion.div variants={textVariant(1.8)} className='bg-gradient-to-b from-[#C9C6B2DD] to-transparent rounded-full w-[15rem] sm:w-[35rem] h-[15rem] sm:h-[35rem] absolute -bottom-28 sm:-bottom-12 -left-28 sm:-left-20 z-10'></motion.div>
            <div className='flex flex-col p-8 flex-wrap lg:flex-row z-20'>
                <motion.div variants={textVariant(0.5)} className='lg:flex-1 flex justify-center lg:justify-end items-center'>
                    <img src={pranav} alt='image' className='w-[90vw] sm:w-[50vw] md:w-[25vw] rounded-[20px]'></img>
                </motion.div>
                <motion.div variants={textVariant(0.5)} className='lg:flex-1 flex flex-col justify-center mt-4'>
                    <CustomBullet>
                        Currently pursuing a Bachelor's degree in <span className='underline decoration-amber-200 text-#D7CC45 font-semibold'>Computer Science</span> at BMS College of Engineering in Bangalore.
                    </CustomBullet>
                    <CustomBullet>
                        My proficiency lies in <span className='underline decoration-amber-200 text-#D7CC45 font-semibold'>Competitive Programming</span> and <span className='underline decoration-amber-200 text-#D7CC45 font-semibold'>Web Development</span>.
                    </CustomBullet>
                    <CustomBullet>
                        I have prior experience working for startups, which has taught me a lot.
                    </CustomBullet>
                    <CustomBullet>
                        I'll be joining <span className='underline decoration-amber-200 text-#D7CC45 font-semibold'>VISA</span> as an intern in the Summer of 2025.
                    </CustomBullet>
                    <CustomBullet>
                        Regionalist in ICPC Amritapuri and Chennai Regionals 2024.
                    </CustomBullet>
                    <CustomBullet>
                        Apart from coding, I enjoy playing video games, listening to music, and traveling.
                    </CustomBullet>
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
