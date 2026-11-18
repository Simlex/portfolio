import React from 'react';
import Link from 'next/link';
import { PROFILE_NAME } from '@/app/constants/v2/profile';
import type { NavItem, SiteLink } from '@/app/types/v2';
import ThemeToggle from './ThemeToggle';

/** Heat shades for the nine squares in the wordmark, echoing the ship log. */
const MARK_LEVELS: number[] = [2, 5, 3, 1, 4, 5, 0, 2, 4];

interface SiteHeaderProps {
    /** Where the wordmark goes: the top of this page, or back to the home page. */
    brandHref: string;
    items: NavItem[];
    /** The one link in the header that leaves this page. */
    routeLink: SiteLink;
}

export default function SiteHeader({ brandHref, items, routeLink }: Readonly<SiteHeaderProps>): React.ReactElement {
    return (
        <header className="top">
            <div className="wrap top-in">
                <a className="brand" href={brandHref} aria-label={`${PROFILE_NAME}, home`}>
                    <span className="mark" aria-hidden="true">
                        {MARK_LEVELS.map((level, index) => (
                            <i key={index} className={`l${level}`} />
                        ))}
                    </span>
                    <span className="brand-name">Simlex</span>
                </a>
                <nav className="nav" aria-label="Sections">
                    {items.map((item) => (
                        <a key={item.id} href={`#${item.id}`}>
                            {item.label}
                        </a>
                    ))}
                    <Link className="nav-route mono" href={routeLink.href}>
                        {routeLink.label}
                    </Link>
                </nav>
                <ThemeToggle />
            </div>
        </header>
    );
}
