import React from 'react';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const Footer = () => {
    return (
        <div className='bg-[#E7DAB5]'>
            <footer class="relative p-6 sm:p-20 w-full">
                <div class="w-full flex justify-around sm:text-sm flex-wrap">
                    <div class="flex flex-col md:col-span-6 lg:col-span-6">
                        <span class="flex font-bold uppercase text-textlight pb-1">Navigation</span>
                        <div className='w-full h-[1px] bg-textlight mx-auto mb-3'></div>
                        <div class="flex flex-col gap-y-2">
                            <a class="relative h-fit w-fit overflow-hidden font-medium text-texlight" href="#home">
                                <ArrowRightIcon /><span class="link1">Home</span>
                            </a>
                            <a class="relative h-fit w-fit overflow-hidden font-medium text-texlight" href="#about">
                                <ArrowRightIcon /><span class="link1">About</span>
                            </a>
                            <a class="relative h-fit w-fit overflow-hidden font-medium text-texlight" href="#experience">
                                <ArrowRightIcon /><span class="link1">Experience</span>
                            </a>
                            <a class="relative h-fit w-fit overflow-hidden font-medium text-texlight" href="#projects">
                                <ArrowRightIcon /><span class="link1">Projects</span>
                            </a>
                            <a class="relative h-fit w-fit overflow-hidden font-medium text-texlight" href="#coding">
                                <ArrowRightIcon /><span class="pr-[10px] link1">Coding Profiles</span>
                            </a>
                            <a class="relative h-fit w-fit overflow-hidden font-medium text-texlight" href="#certificates">
                                <ArrowRightIcon /><span class="link1">Certificates</span>
                            </a>
                            <a class="relative h-fit w-fit overflow-hidden font-medium text-texlight" href="#contact">
                                <ArrowRightIcon /><span class="link1">Contact</span>
                            </a>
                        </div>
                    </div>
                    <div class="flex flex-col md:col-span-6 lg:col-span-6">
                        <span class="flex font-bold uppercase text-textlight pb-1">Socials</span>
                        <div className='w-full h-[1px] bg-textlight mx-auto mb-3'></div>
                        <div class="flex flex-col gap-y-2">
                            <a class="relative h-fit w-fit overflow-hidden font-medium text-texlight" href="#home">
                                <ArrowRightIcon /><span class="link1">LinkedIn</span>
                            </a>
                            <a class="relative h-fit w-fit overflow-hidden font-medium text-texlight" href="#home">
                                <ArrowRightIcon /><span class="pr-[10px] link1">Instagram</span>
                            </a>
                            <a class="relative h-fit w-fit overflow-hidden font-medium text-texlight" href="#home">
                                <ArrowRightIcon /><span class="link1">Github</span>
                            </a>
                            <a class="relative h-fit w-fit overflow-hidden font-medium text-texlight" href="#home">
                                <ArrowRightIcon /><span class="link1">Leetcode</span>
                            </a>
                            <a class="relative h-fit w-fit overflow-hidden font-medium text-texlight" href="#home">
                                <ArrowRightIcon /><span class="pr-[10px] link1">Codechef</span>
                            </a>
                        </div>
                    </div>
                    <div class="flex flex-col md:col-span-6 lg:col-span-6">
                        <span class="flex font-bold uppercase text-textlight pb-1">Resources</span>
                        <div className='w-full h-[1px] bg-textlight mx-auto mb-3'></div>
                        <div class="flex flex-col gap-y-2">
                            <a class="relative h-fit w-fit overflow-hidden font-medium text-texlight" href="#home">
                                <ArrowRightIcon /><span class="pr-[10px] link1">Portoflio V1</span>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
