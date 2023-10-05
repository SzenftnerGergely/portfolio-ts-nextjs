import { useActiveSectionContext } from '@/context/active-section-context';
import { useInView } from 'react-intersection-observer';
import React, { useEffect } from 'react'

function useSectionInView() {
    const { ref, inView } = useInView({
        threshold: 0.5,
    })
    const {setActiveSection, timeOfLastClick} = useActiveSectionContext()
    
    useEffect(() => {
        if(inView && Date.now() - timeOfLastClick > 1000) {
            setActiveSection("Home")
        }
    }, [inView, setActiveSection, timeOfLastClick])
}
