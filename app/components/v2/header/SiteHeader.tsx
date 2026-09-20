import React from 'react';
import { NAV_ITEMS } from '@/app/constants/v2/sections';
import { PROFILE_NAME } from '@/app/constants/v2/profile';
import { SectionId } from '@/app/types/v2';
import ThemeToggle from './ThemeToggle';

/** Heat shades for the nine squares in the wordmark, echoing the ship log. */
const MARK_LEVELS: number[] = [2, 5, 3, 1, 4, 5, 0, 2, 4];

export default function SiteHeader(): React.ReactElement {
    return (
        <header className="top">
            <div className="wrap top-in">
                <a className="brand" href={`#${SectionId.Top}`} aria-label={`${PROFILE_NAME}, back to top`}>
                    <span className="mark" aria-hidden="true">
                        {MARK_LEVELS.map((level, index) => (
                            <i key={index} className={`l${level}`} />
                        ))}
                    </span>
                    <span className="brand-name">Simlex</span>
                </a>
                <nav className="nav" aria-label="Sections">
                    {NAV_ITEMS.map((item) => (
                        <a key={item.id} href={`#${item.id}`}>
                            {item.label}
                        </a>
                    ))}
                </nav>
                <ThemeToggle />
            </div>
        </header>
    );
}
