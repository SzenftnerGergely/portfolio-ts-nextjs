import React from 'react'
import { FaPaperPlane } from 'react-icons/fa'

export default function SubmitBtn() {
    return (
        <button
            type='submit'
            className='group flex items-center justify-center 
            gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white 
            rounded-full outline-none transition-all
            hover:scale-110 active:scale-105 hover:bg-gray-950'
        >
            Submit<FaPaperPlane className='text-xs opacity-70 transition-all 
            group-hover:translate-x-1 group-hover:-translate-y-1'/>
        </button>
    )
}
