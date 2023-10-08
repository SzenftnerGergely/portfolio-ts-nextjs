"use client"

import React from 'react'
import SectionHeading from './section-heading'
import { FaPaperPlane } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'
import { sendEmail } from "@/actions/sendEmail"

export default function Contact() {
    const { ref } = useSectionInView("Contact")

    return (
        <motion.section
            ref={ref}
            id='contact'
            className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{once: true}}
        >
            <SectionHeading>Contact Me</SectionHeading>
            <p className='text-gray-700 -mt-3'>
                Please contact me directly at
                <a href="mailto:example@gmail.com"
                    className='underline'>example@gmail.com
                </a>{" "} or through this form.
            </p>
            <form className='mt-10 flex flex-col'
            action={ async (formData) => {
                await sendEmail(formData)
            }} 
            >
                <input
                    className='h-14 rounded-lg border border-black/10 px-4'
                    name="senderEmail"
                    type="email"
                    placeholder='Your Email'
                    required
                    maxLength={500}
                />
                <textarea
                    className='h-52 my-3 rounded-lg border border-black/10 p-4'
                    name="message"
                    placeholder='Your Message'
                    required
                    maxLength={5000}
                />
                <button
                    type='submit'
                    className='group flex items-center justify-center 
                    gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white 
                    rounded-full outline-none transition-all
                    hover:scale-110 active:scale-105 hover:bg-gray-950'
                    >Submit<FaPaperPlane className='text-xs opacity-70 transition-all 
                    group-hover:translate-x-1 group-hover:-translate-y-1'/>
                </button>
            </form>
        </motion.section>
    )
}