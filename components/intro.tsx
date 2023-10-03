"use client";

import React from 'react'
import Image from "next/image"
import { motion } from 'framer-motion'
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';

export default function Intro() {
    return (
        <section className='mb-28 max-w-[50rem] text-center sm:mb-0'>
            <div className='flex items-center justify-center'>
                <div className='relative'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "tween",
                            duration: 0.2,
                        }}
                    >
                        <Image
                            src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=368&h=368&q=100'
                            alt='Ricardo portrait'
                            width="192"
                            height="192"
                            quality="95"
                            priority={true}
                            className='h-24 w-24 rounded-full object-cover shadow-xl border-[0.35rem] border-white'
                        />
                    </motion.div>
                    <motion.span
                        className='text-4xl absolute bottom-0 right-0'
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 125,
                            delay: 0.1,
                            duration: 0.7,
                        }}
                    >
                        👋
                    </motion.span>
                </div>
            </div>

            <motion.p 
                className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
                initial={{opacity: 0, y: 100}}
                animate={{opacity: 1, y: 0}}
            >
                <span className="font-bold">Hello, I'm Ricardo.</span> I'm a{" "}
                <span className="font-bold">full-stack developer</span> with{" "}
                <span className="font-bold">8 years</span> of experience. I enjoy
                building <span className="italic">sites & apps</span>. My focus is{" "}
                <span className="underline">React (Next.js)</span>
            </motion.p>
            
            <motion.div 
                className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
                initial={{opacity: 0, y: 100}}
                animate={{opacity: 1, y: 0}}
                transition={{
                    delay: 0.1,
                }}
            >
                <Link 
                    href='#contact' 
                    className='flex items-center bg-gray-900 text-white 
                    px-7 py-3 gap-2 rounded-full outline-none hover:scale-110 
                    hover:bg-gray-950 active:scale-105 transition group'
                    >
                    Contact me here<BsArrowRight 
                    className='opacity-70 group-hover:translate-x-1 transition'
                    />
                </Link>
                <a className='group flex items-center bg-white px-7 py-3 
                    gap-2 rounded-full  outline-none hover:scale-110 
                    active:scale-105 transition cursor-pointer border 
                    border-black/10' href='/CV.pdf' download={true}>
                    Download CV <HiDownload
                    className='opacity-60 group-hover:translate-y-1 transition '
                    />
                </a>
                <a className='flex items-center bg-white text-gray-700 
                    p-4 gap-2 rounded-full hover:scale-110 active:scale-105 
                    transition cursor-pointer border hover:text-gray-950
                    border-black/10' href='https://linkedin.com' target='_blank'>
                    <BsLinkedin/>
                </a>
                <a className='flex items-center bg-white text-gray-700 
                    text-[1.35rem] p-4 gap-2 rounded-full hover:scale-[1.15] 
                    active:scale-105 transition cursor-pointer border 
                    border-black/10 hover:text-gray-950' 
                    href='https://github.com' target='_blank'>
                    <FaGithubSquare/>
                </a>
            </motion.div>
        </section>
    )
}
