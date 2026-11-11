'use client';

import { useEffect, useState } from 'react';
import { SCRAMBLE_DURATION_MS } from '@/app/constants/v2/heroMotion';
import { scrambleFrame } from '@/app/utils/heroText';

/** Decodes the text from random glyphs into place, once. Shows the plain text when disabled. */
export default function useScramble(text: string, isEnabled: boolean): string {
    const [display, setDisplay] = useState<string>(text);

    useEffect(() => {
        if (!isEnabled) {
            setDisplay(text);
            return;
        }
        let frame = 0;
        const start = performance.now();
        const tick = (now: number): void => {
            const progress = Math.min((now - start) / SCRAMBLE_DURATION_MS, 1);
            setDisplay(scrambleFrame(text, progress));
            if (progress < 1) {
                frame = requestAnimationFrame(tick);
            }
        };
        frame = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(frame);
    }, [text, isEnabled]);

    return display;
}
