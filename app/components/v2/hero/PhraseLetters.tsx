'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CHAR_DELAY_STEP, CHAR_VARIANTS } from '@/app/constants/v2/heroMotion';

const RISE_CLASS: string = 'rise';
const INTRO_CLASS: string = 'rise intro';

interface PhraseLettersProps {
    text: string;
    /** Word position the first letter follows on, so the CSS entrance runs straight on from the lead. */
    startIndex: number;
    /** Only the first phrase plays the CSS entrance. Later swaps are left to framer-motion. */
    isIntro: boolean;
}

/** Splits a phrase into masked words of letters that the parent's variants stagger in and out. */
export default function PhraseLetters({ text, startIndex, isIntro }: Readonly<PhraseLettersProps>): React.ReactElement {
    let letterIndex = 0;

    return (
        <>
            {text.split(' ').map((word, wordIndex) => (
                <React.Fragment key={`${word}-${wordIndex}`}>
                    <span className="mask">
                        {Array.from(word, (char, charIndex) => {
                            const delayIndex = startIndex + letterIndex * CHAR_DELAY_STEP;
                            letterIndex += 1;
                            return (
                                <motion.span
                                    key={`${char}-${charIndex}`}
                                    className={isIntro ? INTRO_CLASS : RISE_CLASS}
                                    variants={CHAR_VARIANTS}
                                    style={{ '--i': delayIndex } as React.CSSProperties}
                                >
                                    {char}
                                </motion.span>
                            );
                        })}
                    </span>{' '}
                </React.Fragment>
            ))}
        </>
    );
}
