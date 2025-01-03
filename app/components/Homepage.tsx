"use client"
import { useTheme } from 'next-themes'
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { Icons } from './ui/icons';

type Props = {}

export default function Homepage({ }: Props) {

    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // useEffect(() => setMounted(true), []);

    // if (!mounted) return null; // Prevents hydration mismatch

    // useEffect(() => {
    //     setTheme('dark')
    // }, []);

    useEffect(() => {
        const html = document.documentElement; // Select the <html> element
        html.classList.toggle('dark');
    }, []);

    const experiences = [
        {
            date: '2023 - Present',
            roles: [
                'CEO, CTO & Co-Founder ~ Ticketsdeck Events',
            ],
            description: `I co-founded Ticketsdeck Events, a platform that connects event organizers with event attendees. 
            I am responsible for the technical direction of the company, ensuring that we are building scalable and reliable software solutions.`,
            skills: ['Javascript', 'Typescript', 'React'],
            link: 'https://event.sticketsdeck.com'
        },
        {
            date: 'May 2022 - Present',
            roles: [
                'Engineering Team Lead ~ Xown Solutions',
                'Senior Engineer',
                'Intern Software Engineer'
            ],
            description: `I lead a team of 5 software engineers in building software solutions that solve problems in the Global tech ecosystem. 
            I am responsible for the technical direction of the team, ensuring that we are building scalable and reliable software solutions.`,
            skills: ['Javascript', 'Typescript', 'React'],
            link: 'https://www.xownsolutions.com'
        },
        {
            date: 'May 2022 - October 2022',
            roles: [
                'UIUX Designer ~ HillCross College',
            ],
            description: `I was responsible for designing the user interface and user experience of the college's educational platform. 
            I worked with the product team to ensure that the platform was user-friendly and easy to use, while also being visually appealing as 
            it was targeted at students.`,
            skills: ['Javascript', 'Typescript', 'React'],
            link: 'https://www.hillcrosscollege.com'
        },
    ]

    return (
        <main className="bg-background text-foreground px-5 dark:bg-background dark:text-foreground">
            <section className='flex flex-col py-20'>
                <div className='flex flex-col items-start'>
                    {/* <p>Hello, there. I am</p> */}
                    <h1 className='text-3xl font-semibold'>Similoluwa Afolabi</h1>
                    <p className='my-2'>Senior Software Engineer</p>
                    <span className='text-secondary mb-4'>
                        I find fulfilment in creating solutions to problems using technology.
                    </span>

                    <div className='flex flex-row items-center gap-3'>
                        <Link href={"/"}>
                            <Icons.Github />
                        </Link>
                        <Link href={"/"}>
                            <Icons.LinkedIn />
                        </Link>
                        <Link href={"/"}>
                            <Icons.X />
                        </Link>
                        <Link href={"/"}>
                            <Icons.Behance />
                        </Link>
                        <Link href={"/"}>
                            <Icons.Dribble />
                        </Link>
                    </div>
                </div>
            </section>

            <section className='flex flex-col pb-20'>
                <div>
                    <span className='py-2 mb-3 block text-sm font-semibold'>ABOUT</span>
                    <div className='flex flex-col gap-2 text-sm text-secondary leading-6'>
                        <p>
                            I am a software engineer who is passionate about building scalable and reliable software solutions.
                            I have experience in building web applications, APIs, and mobile applications.
                            I am proficient in JavaScript, TypeScript, ReactJS, NextJS, NestJS, NodeJS, C# .NET.
                            I am also familiar with cloud technologies such as AWS, GCP, and Azure.
                        </p>
                        <p>
                            Currently, I am a software engineer at <a href="https://www.xownsolutions.com/">Xown Solutions</a>, where I work on building
                            software solutions that solve problems in the African tech ecosystem.
                        </p>
                        <p>
                            In the past, I've had the to develop software across various industries such as finance, healthcare, education and e-commerce -
                            from enterprise applications to consumer-facing applications.
                        </p>
                        <p>
                            In my spare time, I enjoy reading, beign at the gym, swimming, or thinking about the next big thing I can build.
                        </p>
                    </div>
                </div>
            </section>

            <section className='flex flex-col pb-20'>
                <div>
                    <span className='py-2 mb-3 block text-sm font-semibold'>EXPERIENCE</span>
                    <div className='flex flex-col gap-5'>
                        {
                            experiences.map((experience, index) => (
                                <div key={index} className='text-sm text-secondary leading-6 mb-3'>
                                    <span className='text-sm mb-2 block'>{experience.date}</span>
                                    <div className='flex flex-col gap-1'>
                                        {
                                            experience.roles.map((role, index) => {
                                                if (index === 0) {
                                                    return (
                                                        <Link href={experience.link} className='flex flex-row group'>
                                                            <h3 key={index} className='text-foreground text-semibold'>
                                                                {role}
                                                            </h3>
                                                            <span className='rotate-45 scale-90 opacity-70 transition group-hover:opacity-100 group-hover:scale-100'>
                                                                <Icons.ArrowUp />
                                                            </span>
                                                        </Link>
                                                    )
                                                }
                                                return (
                                                    <h3 key={index} className='text-secondary text-semibold'>
                                                        {role}
                                                    </h3>
                                                )
                                            })
                                        }
                                    </div>
                                    <p className='mb-3 mt-2'>
                                        {experience.description}
                                    </p>
                                    <div className='flex flex-col gap-1'>
                                        <p className='text-xs font-medium'>Skills Utilized</p>
                                        <div className='flex flex-row flex-wrap gap-2 text-xs'>
                                            {
                                                experience.skills.map((skill, index) => (
                                                    <span key={index} className='p-2 px-4 rounded-full bg-primary-light text-primary'>
                                                        {skill}
                                                    </span>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>

            <section className='flex flex-col pb-20'>
                <div>
                    <span className='py-2 mb-3 block text-sm font-semibold'>PROJECTS</span>
                    <div className='flex flex-col gap-3'>
                        <h4 className='font-medium text-foreground'>Ticketsdeck Event Web Application</h4>
                        <p className='text-secondary text-sm'>
                            A web application that connects event organizers with event attendees.
                            The platform allows event organizers to create events, sell tickets, and manage attendees.
                        </p>
                        <div className='flex flex-row gap-2 text-xs'>
                            <span className='p-2 px-4 rounded-full bg-primary-light text-primary'>ReactJS</span>
                            <span className='p-2 px-4 rounded-full bg-primary-light text-primary'>NextJS</span>
                            <span className='p-2 px-4 rounded-full bg-primary-light text-primary'>Typescript</span>
                        </div>
                        <div>
                            <Image src="/images/ticketsdeck.png" alt="Ticketsdeck Event Web Application" fill />
                        </div>
                    </div>
                </div>
            </section>

            {/* <section>
                <div>
                    <span>WRITING</span>
                    <div>
                        <div>
                            <div><Image src={""} alt="" fill /></div>
                            <div>
                                <h3>2024</h3>
                                <p>Accessibility Pitfalls and How to Avoid Them</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            <section>
                <p className='text-secondary text-sm pb-16'>
                    Inspiration gotten from <Link href={"/"} className="text-foreground">Brittany Chang</Link>.
                    Built with <Link href={"/"} className="text-foreground">NextJS</Link>, <Link href={"/"} className="text-foreground">TailwindCSS</Link>, and <Link href={"/"} className="text-foreground">Typescript</Link>. Hosted on <Link href={"/"} className="text-foreground">Vercel</Link>.
                    Written by Similoluwa Afolabi.
                </p>
            </section>
        </main>
    )
}