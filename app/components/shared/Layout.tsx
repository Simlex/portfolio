"use client"
import { ThemeProvider } from 'next-themes'
import React from 'react'
import InteractiveBackground from './InteractiveBgCopy'

type Props = {
    children: React.ReactNode
}

export default function Layout({ children }: Props) {
    return (
        <>
            <InteractiveBackground />
            {children}
        </>
    )
}