"use client"
import React, { useEffect } from 'react'
import About from './home/About';
import Experience from './home/Experience';
import Projects from './home/Projects';
import Hero from './home/Hero';
import Footer from './home/Footer';

type Props = {}

export default function Homepage({ }: Props) {

    useEffect(() => {
        const html = document.documentElement; // Select the <html> element
        html.classList.toggle('dark');
    }, []);

    return (
        <main className="bg-background text-foreground px-5 md:px-20 md:flex md:flex-row dark:bg-background dark:text-foreground">
            <Hero />
            <div className='md:basis-[55%]'>
                <About />
                <Experience />
                <Projects />
                {/* <Writing /> */}
                <Footer />
            </div>
        </main>
    )
}