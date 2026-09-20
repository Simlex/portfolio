'use client';

import { useEffect, useState } from 'react';

const REDUCED_MOTION_QUERY: string = '(prefers-reduced-motion: reduce)';

/** Starts as true so motion only ever switches on once we know the visitor is happy with it. */
export default function usePrefersReducedMotion(): boolean {
    const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(true);

    useEffect(() => {
        const query = window.matchMedia(REDUCED_MOTION_QUERY);
        const update = (): void => setPrefersReducedMotion(query.matches);

        update();
        query.addEventListener('change', update);
        return () => query.removeEventListener('change', update);
    }, []);

    return prefersReducedMotion;
}
