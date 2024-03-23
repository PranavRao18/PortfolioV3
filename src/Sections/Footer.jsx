import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className='w-2/3 h-[1px] bg-textlight mx-auto'></div>
            <footer class="relative p-8 sm:p-20 w-full">
                <div class="w-full flex justify-around">  
                    <div class="flex flex-col md:col-span-6 lg:col-span-6">
                        <span class="flex font-bold uppercase text-textlight pb-1">Navigation</span>
                        <div className='w-full h-[1px] bg-textlight mx-auto mb-3'></div>
                        <div class="flex flex-col gap-y-2">
                            <a class="relative h-fit w-fit overflow-hidden font-medium text-texlight hover:pl-4  link-text" href="#home">
                                <span class="link1">Home</span>
                            </a>
                            <a class="relative h-fit w-fit overflow-hidden font-medium text-texlight hover:pl-4 link-text" href="#about">
                                <span class="link1">About</span>
                            </a>
                            <a class="relative h-fit w-fit overflow-hidden font-medium text-texlight hover:pl-4 link-text" href="#experience">
                                <span class="link1">Experience</span>
                            </a>
                            <a class="relative h-fit w-fit overflow-hidden font-medium text-texlight hover:pl-4 link-text" href="#projects">
                                <span class="link1">Projects</span>
                            </a>
                            <a class="relative h-fit w-fit overflow-hidden font-medium text-texlight hover:pl-4 link-text" href="#coding">
                               <span class="link1">Coding Profiles</span>
                            </a>
                            <a class="relative h-fit w-fit overflow-hidden font-medium text-texlight hover:pl-4 link-text" href="#certificates">
                                <span class="link1">Certificates</span>
                            </a>
                            <a class="relative h-fit w-fit overflow-hidden font-medium text-texlight hover:pl-4 link-text" href="#contact">
                                <span class="link1">Contact</span>
                            </a>
                        </div>
                    </div>
                    <div class="flex flex-col md:col-span-6 lg:col-span-6">
                        <span class="flex font-bold uppercase text-textlight pb-1">Socials</span>
                        <div className='w-full h-[1px] bg-textlight mx-auto mb-3'></div>
                        <div class="flex flex-col gap-y-2">
                            <a class="relative h-fit w-fit overflow-hidden font-medium text-texlight" href="#home">
                                <span class="link1">LinkedIn</span>
                            </a>
                            <a class="relative h-fit w-fit overflow-hidden font-medium text-texlight" href="#home">
                                <span class="link1">Instagram</span>
                            </a>
                            <a class="relative h-fit w-fit overflow-hidden font-medium text-texlight" href="#home">
                                <span class="link1">Github</span>
                            </a>
                            <a class="relative h-fit w-fit overflow-hidden font-medium text-texlight" href="#home">
                                <span class="link1">Leetcode</span>
                            </a>
                            <a class="relative h-fit w-fit overflow-hidden font-medium text-texlight" href="#home">
                               <span class="link1">Codechef</span>
                            </a>
                        </div>
                    </div>
                    <div class="col-span-2 flex flex-col md:col-span-3 lg:col-span-3">
                        <span class="link-text mb-3 flex border-b-[1.5px] border-accent-500 pb-1 font-bold  uppercase text-secondary-300">Resources</span>
                        <div class="flex flex-col gap-y-2 md:gap-y-1">
                            <a target="_blank" class="link-text group relative block h-fit w-fit overflow-hidden font-medium leading-base text-secondary-100" href="https://www.pillarstack.com">
                                <span class="link1">Pillarstack</span>
                            </a>
                            <a target="_blank" class="link-text group relative block h-fit w-fit overflow-hidden font-medium leading-base text-secondary-100" href="https://www.figma.com/community/file/1328038510191576951/project-starter-template">
                                <span class="link1">Figma Templates</span>
                            </a>
                            <a target="_blank" class="link-text group relative block h-fit w-fit overflow-hidden font-medium leading-base text-secondary-100" href="https://huyngportfoliov1.netlify.app/">
                                <span class="link1">Portfolio V1</span>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
