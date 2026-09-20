'use client';

import React from 'react';
import { ReactLenis } from 'lenis/react';
import type { LenisOptions } from 'lenis';
import 'lenis/dist/lenis.css';
import usePrefersReducedMotion from '@/app/hooks/usePrefersReducedMotion';

/**
 * Eased scrolling: the page catches up to the wheel rather than snapping to it, and anchors
 * glide to their section clear of the sticky header. Touch scrolling stays native.
 */
const LENIS_OPTIONS: LenisOptions = {
    lerp: 0.075,
    wheelMultiplier: 0.9,
    smoothWheel: true,
    allowNestedScroll: true,
    autoRaf: true,
    anchors: { offset: -80 },
};

export default function SmoothScroll(): React.ReactElement | null {
    const isStill = usePrefersReducedMotion();

    if (isStill) {
        return null;
    }

    return <ReactLenis root options={LENIS_OPTIONS} />;
}
