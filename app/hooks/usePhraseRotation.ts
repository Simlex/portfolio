'use client';

import { useEffect, useState } from 'react';
import { ROTATION_FIRST_DELAY_MS, ROTATION_INTERVAL_MS } from '@/app/constants/v2/heroMotion';

export interface PhraseRotation {
    index: number;
    /** How many swaps have happened. Zero means the first phrase is still on its intro. */
    steps: number;
}

/**
 * Steps through the phrases once and lands back on the first, so the headline stops moving
 * after a single pass. Holds while paused.
 */
export default function usePhraseRotation(count: number, isEnabled: boolean, isPaused: boolean): PhraseRotation {
    const [index, setIndex] = useState<number>(0);
    const [steps, setSteps] = useState<number>(0);

    useEffect(() => {
        if (!isEnabled || isPaused || steps >= count) {
            return;
        }
        const delay = steps === 0 ? ROTATION_FIRST_DELAY_MS : ROTATION_INTERVAL_MS;
        const timer = window.setTimeout(() => {
            setIndex((current) => (current + 1) % count);
            setSteps((current) => current + 1);
        }, delay);
        return () => window.clearTimeout(timer);
    }, [count, isEnabled, isPaused, steps]);

    return { index, steps };
}
