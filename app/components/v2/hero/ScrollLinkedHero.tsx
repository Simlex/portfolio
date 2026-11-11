'use client';

import React, { useRef } from 'react';
import useHeroScrollVars from '@/app/hooks/useHeroScrollVars';
import { SectionId } from '@/app/types/v2';

interface ScrollLinkedHeroProps {
    labelledBy: string;
    children: React.ReactNode;
}

/** The hero's section element, wired to Lenis. Its children can stay server-rendered. */
export default function ScrollLinkedHero({ labelledBy, children }: Readonly<ScrollLinkedHeroProps>): React.ReactElement {
    const ref = useRef<HTMLElement>(null);
    useHeroScrollVars(ref);

    return (
        <section ref={ref} className="hero wrap" id={SectionId.Top} aria-labelledby={labelledBy}>
            {children}
        </section>
    );
}
