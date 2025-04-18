import Link from 'next/link'
import React from 'react'
import { Icons } from '../ui/icons'
import { motion } from 'framer-motion'

export default function Experience() {


    const experiences = [
        {
            date: '2023 - Present',
            roles: [
                'CEO, CTO & Co-Founder ~ Ticketsdeck Events',
            ],
            description: `I co-founded Ticketsdeck Events, a platform that connects event organizers with event attendees. 
            I am responsible for the technical direction of the company, ensuring that we are building scalable and reliable software solutions.`,
            skills: ['Typescript', 'ReactJS', 'NextJS', 'Prisma', 'NestJS', 'TailwindCSS', 'AWS'],
            link: 'https://events.ticketsdeck.com'
        },
        {
            date: 'May 2022 - April 2025',
            roles: [
                'Engineering Team Lead ~ Xown Solutions',
                'Senior Engineer',
                'Intern Software Engineer'
            ],
            description: `I lead a team of 5 software engineers in building software solutions that solve problems in the Global tech ecosystem. 
            I am responsible for the technical direction of the team, ensuring that we are building scalable and reliable software solutions.`,
            skills: ['Javascript', 'Typescript', 'NextJS', 'Prisma', 'TailwindCSS', 'ASP.NET Core'],
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
            skills: ['Figma', 'FigJam'],
            // link: 'https://hillcrosscollege.com/'
        },
    ]

    return (
        <section className='flex flex-col pb-20'>
            <div>
                <span className='py-3 mb-2 block text-sm md:text-base font-semibold bg-background sticky top-0 z-20'>EXPERIENCE</span>
                <div className='flex flex-col gap-5'>
                    {
                        experiences.map((experience, index) => (
                            <motion.div key={index}
                                initial={{ y: 25, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                className='text-sm md:text-base text-secondary leading-6 mb-3'>
                                <span className='text-sm mb-2 block'>{experience.date}</span>
                                <div className='flex flex-col gap-1'>
                                    {
                                        experience.roles.map((role, index) => {
                                            if (index === 0) {
                                                return (
                                                    <Link key={index} href={experience.link ?? '#'} className={`flex flex-row group ${experience.link ? 'cursor-pointer' : 'pointer-events-none'}`}>
                                                        <h3 key={index} className='text-foreground text-semibold'>
                                                            {role}
                                                        </h3>
                                                        {
                                                            experience.link &&
                                                            <span className='rotate-45 scale-90 opacity-70 transition group-hover:opacity-100 group-hover:scale-100'>
                                                                <Icons.ArrowUp />
                                                            </span>
                                                        }
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
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}