import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Icons } from '../ui/icons'

export default function Projects() {
    return (
        <section className='flex flex-col pb-20'>
            <div>
                <span className='py-3 mb-2 block text-sm font-semibold bg-background sticky top-0 z-20'>PROJECTS</span>
                <div className='flex flex-col gap-3'>
                    <Link href={"/"} className='flex flex-row group'>
                        <h4 className='font-medium text-foreground'>Ticketsdeck Event Web Application</h4>
                        <span className='rotate-45 scale-90 opacity-70 transition group-hover:opacity-100 group-hover:scale-100'>
                            <Icons.ArrowUp />
                        </span>
                    </Link>
                    <p className='text-secondary text-sm'>
                        A web application that connects event organizers with event attendees.
                        The platform allows event organizers to create events, sell tickets, and manage attendees.
                    </p>
                    <div className='flex flex-row gap-2 text-xs'>
                        <span className='p-2 px-4 rounded-full bg-primary-light text-primary'>ReactJS</span>
                        <span className='p-2 px-4 rounded-full bg-primary-light text-primary'>NextJS</span>
                        <span className='p-2 px-4 rounded-full bg-primary-light text-primary'>Typescript</span>
                    </div>
                    <div className='w-48 h-24 rounded-xl relative border-white/20 border-[1px]'>
                        <Image src="/images/ticketsdeck.png" alt="Ticketsdeck Event Web Application" className='text-xs' fill />
                    </div>
                </div>
            </div>
        </section>
    )
}