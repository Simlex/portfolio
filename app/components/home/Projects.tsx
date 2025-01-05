import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Icons } from '../ui/icons'
import images from '@/public/images'

export default function Projects() {

    const projects = [
        {
            name: 'Ticketsdeck Event Web Application',
            description: `A web application that connects event organizers with event attendees. 
            The platform allows event organizers to create events, sell tickets, and manage attendees.`,
            technologies: ['Typescript', 'ReactJS', 'NextJS', 'Prisma', 'NestJS', 'AWS'],
            image: images.e_ticketsdeck,
            link: 'https://events.ticketsdeck.com'
        },
        {
            name: 'Stylist Piazza Mobile Application',
            description: `A mobile application that connects hair stylists with customers. 
            I was responsible for building the mobile application, and API.`,
            technologies: ['Typescript', 'React Native', 'NodeJS', 'AWS'],
            image: images.stylist_p,
            link: 'https://apps.apple.com/ng/app/stylist-piazza/id6737825619'
        },
        {
            name: '247 Travels Web Application',
            company: 'Xown Solutions',
            companyLink: 'https://xownsolutions.com',
            description: `A web application that allows users to book flights', 
            I was responsible for building the frontend interface of the web application.`,
            technologies: ['Typescript', 'NextJS'],
            image: images.t247,
            link: 'https://247travels.com'
        },
        {
            name: 'McNif Cuisine Web Application',
            company: 'Xown Solutions',
            companyLink: 'https://xownsolutions.com',
            description: 'A web application showcasing an exquisite dining experience and culinary excellence. Implemented for a UK-based restaurant, the site emphasizes elegance, usability, and customer engagement, making it easy for visitors to explore the menu, and make reservations seamlessly.',
            technologies: ['Typescript', 'NextJS', 'Prisma', 'TailwindCSS'],
            image: images.mcnif,
            link: 'https://mcnif.com'
        },
        {
            name: 'Bablo Website',
            company: 'Xown Solutions',
            companyLink: 'https://xownsolutions.com',
            description: 'Bablo Homes is a modern real estate platform designed to connect buyers, sellers, and renters with their dream properties. This project combines sleek design, seamless functionality, and user-centric features to deliver a top-tier real estate browsing experience.',
            technologies: ['Typescript', 'NextJS', 'Prisma', 'TailwindCSS'],
            image: images.bablo,
            link: 'https://bablohomes.co.uk'
        },
        {
            name: 'Previous Portfolio',
            description: 'My previous portfolio website, which includes my graphic designs, UIUX design projects, and software engineering projects.',
            technologies: ['HTML', 'SCSS', 'Javascript'],
            image: images.portfolio,
            link: 'https://simlex.netlify.app/'
        }

    ]

    return (
        <section className='flex flex-col pb-20'>
            <div>
                <span className='py-3 mb-2 block text-sm md:text-base font-semibold bg-background sticky top-0 z-20'>PROJECTS</span>
                {
                    projects.map((project, index) => (
                        <div key={index} className='flex flex-col gap-3 my-8 last:mb-0'>
                            <div className='flex flex-col gap-2 md:flex-row md:justify-between md:items-center'>
                                <Link href={project.link} className='flex flex-row group'>
                                    <h4 className='font-medium text-foreground'>{project.name}</h4>
                                    <span className='rotate-45 scale-90 opacity-70 transition group-hover:opacity-100 group-hover:scale-100'>
                                        <Icons.ArrowUp />
                                    </span>
                                </Link>
                                {
                                    project.company &&
                                    <Link href={project.companyLink} className='text-xs md:text-sm text-primary hover:underline md:hover:bg-white/5 hover:text-white md:bg-primary-light md:p-2 md:px-4 rounded-full w-fit'>
                                        Done with team at {project.company}
                                    </Link>
                                }
                            </div>
                            <p className='text-secondary text-sm md:text-base'>
                                {project.description}
                            </p>
                            {
                                project.technologies &&
                                <div className='flex flex-row flex-wrap gap-2 text-xs'>
                                    {
                                        project.technologies.map((tech, index) => (
                                            <span key={index} className='p-2 px-4 rounded-full bg-primary-light text-primary'>
                                                {tech}
                                            </span>
                                        ))
                                    }
                                </div>
                            }
                            <div className='w-48 h-24 rounded-xl relative overflow-hidden border-white/20 border-[1px]'>
                                <Image src={project.image} alt={project.name} className='text-xs' fill />
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}