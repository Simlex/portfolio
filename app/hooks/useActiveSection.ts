'use client';

import { useEffect, useState } from 'react';
import { SectionId } from '@/app/types/v2';
import { SECTION_TAB, WATCHED_SECTIONS } from '@/app/constants/v2/sections';

/** A band across the middle of the screen: whatever sits in it is the section being read. */
const READING_BAND: string = '-45% 0px -50% 0px';

const BOTTOM_SLACK: number = 8;

function isSectionId(value: string): value is SectionId {
    return Object.values(SectionId).includes(value as SectionId);
}

function isAtBottom(): boolean {
    return window.innerHeight + window.scrollY >= document.body.scrollHeight - BOTTOM_SLACK;
}

/** Returns the tab that matches the section currently in view. */
export default function useActiveSection(): SectionId {
    const [active, setActive] = useState<SectionId>(SectionId.Top);

    useEffect(() => {
        const handleEntries = (entries: IntersectionObserverEntry[]): void => {
            const visible = entries.find((entry) => entry.isIntersecting);
            if (!visible || !isSectionId(visible.target.id)) {
                return;
            }
            setActive(SECTION_TAB[visible.target.id]);
        };

        const observer = new IntersectionObserver(handleEntries, { rootMargin: READING_BAND });
        WATCHED_SECTIONS.forEach((id) => {
            const element = document.getElementById(id);
            if (element) {
                observer.observe(element);
            }
        });

        const handleScroll = (): void => {
            if (isAtBottom()) {
                setActive(SectionId.Contact);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            observer.disconnect();
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return active;
}
