'use client';

import { useEffect, useState } from 'react';

/** Steps an index from 0 to count - 1 and round again, forever, while enabled. */
export default function useCycle(count: number, intervalMs: number, isEnabled: boolean): number {
    const [index, setIndex] = useState<number>(0);

    useEffect(() => {
        if (!isEnabled || count < 2) {
            return;
        }
        const timer = window.setInterval(() => setIndex((current) => (current + 1) % count), intervalMs);
        return () => window.clearInterval(timer);
    }, [count, intervalMs, isEnabled]);

    return index;
}
