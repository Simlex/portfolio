'use client';

import { useEffect, useState } from 'react';

const SCROLL_NOISE: number = 6;

/** True while the visitor is scrolling down the page, so the tab bar can shrink out of the way. */
export default function useCompactOnScroll(threshold: number = 140): boolean {
    const [isCompact, setIsCompact] = useState<boolean>(false);

    useEffect(() => {
        let lastY = window.scrollY;

        const handleScroll = (): void => {
            const currentY = window.scrollY;
            const delta = currentY - lastY;
            if (Math.abs(delta) < SCROLL_NOISE) {
                return;
            }
            lastY = currentY;
            setIsCompact(delta > 0 && currentY > threshold);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [threshold]);

    return isCompact;
}
