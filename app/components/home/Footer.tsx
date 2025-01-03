import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <section>
            <p className='text-secondary text-sm pb-16'>
                Inspiration gotten from <Link href={"/"} className="text-foreground">Brittany Chang</Link>.
                Built with <Link href={"/"} className="text-foreground">NextJS</Link>, <Link href={"/"} className="text-foreground">TailwindCSS</Link>, and <Link href={"/"} className="text-foreground">Typescript</Link>. Hosted on <Link href={"/"} className="text-foreground">Vercel</Link>.
                Written by Similoluwa Afolabi.
            </p>
        </section>
    )
}