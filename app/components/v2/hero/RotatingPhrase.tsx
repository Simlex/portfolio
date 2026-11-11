'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { PHRASE_VARIANTS } from '@/app/constants/v2/heroMotion';
import usePhraseRotation from '@/app/hooks/usePhraseRotation';
import usePrefersReducedMotion from '@/app/hooks/usePrefersReducedMotion';
import { MotionState } from '@/app/types/v2';
import PhraseLetters from './PhraseLetters';

interface RotatingPhraseProps {
    phrases: string[];
    startIndex: number;
}

/**
 * The accent line of the statement. Every phrase is stacked invisibly in the same grid cell, so
 * the line keeps the height of the longest one and nothing below it jumps while it cycles.
 */
export default function RotatingPhrase({ phrases, startIndex }: Readonly<RotatingPhraseProps>): React.ReactElement {
    const prefersReducedMotion = usePrefersReducedMotion();
    const [isPaused, setIsPaused] = useState<boolean>(false);
    const { index, steps } = usePhraseRotation(phrases.length, !prefersReducedMotion, isPaused);
    const phrase = `${phrases[index]}.`;

    return (
        <span className="rotator" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
            {phrases.map((sizer) => (
                <span className="rotator-sizer" key={sizer}>
                    {sizer}.
                </span>
            ))}
            <AnimatePresence initial={false}>
                <motion.span
                    key={phrase}
                    className="rotator-phrase"
                    variants={PHRASE_VARIANTS}
                    initial={MotionState.Hidden}
                    animate={MotionState.Shown}
                    exit={MotionState.Gone}
                >
                    <PhraseLetters text={phrase} startIndex={startIndex} isIntro={steps === 0} />
                </motion.span>
            </AnimatePresence>
        </span>
    );
}
