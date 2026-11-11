'use client';

import type { RefObject } from 'react';
import type Lenis from 'lenis';
import { useLenis } from 'lenis/react';
import { HERO_PROGRESS_VAR, HERO_SKEW_VAR, MAX_SKEW_DEG, SKEW_PER_VELOCITY } from '@/app/constants/v2/heroMotion';

function clamp(value: number, min: number, max: number): number {
    return Math.min(Math.max(value, min), max);
}

/**
 * Feeds Lenis's scroll position and velocity to the hero as CSS variables, so the styles can
 * ease the statement out and lean it with scroll speed without a React render per frame.
 * Lenis only mounts when motion is welcome, so with reduced motion nothing here ever runs.
 */
export default function useHeroScrollVars(ref: RefObject<HTMLElement | null>): void {
    useLenis((lenis: Lenis): void => {
        const element = ref.current;
        if (!element) {
            return;
        }
        const progress = clamp(lenis.scroll / Math.max(element.offsetHeight, 1), 0, 1);
        const skew = clamp(-lenis.velocity * SKEW_PER_VELOCITY, -MAX_SKEW_DEG, MAX_SKEW_DEG);
        element.style.setProperty(HERO_PROGRESS_VAR, progress.toFixed(3));
        element.style.setProperty(HERO_SKEW_VAR, skew.toFixed(2));
    });
}
