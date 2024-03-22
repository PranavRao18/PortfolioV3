import React from 'react';
import { projects } from '../constants/constants';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';

const ProjectCard = ({ project }) => {
    return (
        <div className="relative bg-white bg-opacity-10 p-8 rounded-lg shadow-lg glass max-w-[500px]">
            <img src={project.image} alt={project.title} className="w-full h-auto rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-200 mb-4">{project.description}</p>
            <a href={project.github} className="text-blue-500 hover:underline" target='_blank'>GitHub</a>
        </div>
    );
};

const Projects = () => {
    return (
        <motion.div className='bg-black rounded-[50px] p-20'>
            <motion.h1 className='text-textdark1 text-5xl sm:text-8xl font-semibold text-center p-0 sm:p-8'>PROJECTS</motion.h1>
            <div className="flex flex-wrap justify-center gap-20">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </motion.div>
    );
};

export default SectionWrapper(Projects, 'projects');
