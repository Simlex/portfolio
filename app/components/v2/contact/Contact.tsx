import React from 'react';
import { CONTACT_LINKS, PROFILE_EMAIL } from '@/app/constants/v2/profile';
import { SectionId, type ContactCopy } from '@/app/types/v2';

function isExternal(href: string): boolean {
    return href.startsWith('http');
}

interface ContactProps {
    copy: ContactCopy;
}

export default function Contact({ copy }: Readonly<ContactProps>): React.ReactElement {
    return (
        <section className="wrap" id={SectionId.Contact} aria-labelledby="contact-heading">
            <div className="contact">
                <div>
                    <h2 className="display" id="contact-heading">
                        {copy.heading}
                    </h2>
                    <p>{copy.body}</p>
                    <a className="mail" href={`mailto:${PROFILE_EMAIL}`}>
                        {PROFILE_EMAIL}
                    </a>
                </div>
                <ul className="c-links">
                    {CONTACT_LINKS.map((link) => (
                        <li key={link.label}>
                            <a
                                href={link.href}
                                target={isExternal(link.href) ? '_blank' : undefined}
                                rel={isExternal(link.href) ? 'noopener' : undefined}
                            >
                                {link.label} <span>{link.value}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
