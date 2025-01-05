import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <section>
            <p className='text-secondary text-sm pb-16'>
                Website design inspiration gotten from <Link href={"https://brittanychiang.com/"} target='_blank' className="text-white">Brittany Chang</Link>.
                Built with <Link href={"https://nextjs.org"} target='_blank' className="text-white">NextJS</Link>, <Link href={"https://tailwindcss.com/"} target='_blank' className="text-white">TailwindCSS</Link>, and <Link href={"https://www.typescriptlang.org/"} target='_blank' className="text-white">Typescript</Link>. Hosted on <Link href={"https://vercel.com/"} target='_blank' className="text-foreground">Vercel</Link>.
                Written by me, <span className="text-white">Similoluwa Afolabi.</span>
            </p>
        </section>
    )
}