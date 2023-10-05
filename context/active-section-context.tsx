"use client"

import React, { useState, createContext, useContext } from 'react'
import { links } from '@/lib/data'
import { link } from 'fs'
import { type } from 'os'

type SectionName = typeof links[number]["name"]

type ActiveSectionContextProviderProvider = {
    children: React.ReactNode
}

type ActiveSectionContextType = {
    activeSection: SectionName;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>
} 

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null)

export default function ActiveSectionContextProvider({ children }: ActiveSectionContextProviderProvider) {
    const [activeSection, setActiveSection] = useState<SectionName>('Home')

    return (
        <ActiveSectionContext.Provider value={{
            activeSection,
            setActiveSection,
        }}>{children}</ActiveSectionContext.Provider>
    )
}

export function useActiveSectionContext() {
    const context = useContext(ActiveSectionContext)

    if(context === null) {
        throw new Error (
            "useActiveSectionContext must be used within an ActiveSectionContextProvider"
        )
    }

    return context
}
