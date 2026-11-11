'use client';

import React from 'react';
import useScramble from '@/app/hooks/useScramble';
import usePrefersReducedMotion from '@/app/hooks/usePrefersReducedMotion';

interface ScrambleTextProps {
    text: string;
    className?: string;
}

/** Monospace text that decodes into place on load. Screen readers get the plain text. */
export default function ScrambleText({ text, className }: Readonly<ScrambleTextProps>): React.ReactElement {
    const prefersReducedMotion = usePrefersReducedMotion();
    const display = useScramble(text, !prefersReducedMotion);

    return (
        <p className={className}>
            <span className="sr">{text}</span>
            <span aria-hidden="true">{display}</span>
        </p>
    );
}
