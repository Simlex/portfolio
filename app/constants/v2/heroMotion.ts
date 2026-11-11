import type { Variants } from 'framer-motion';
import { MotionState } from '@/app/types/v2';

/** The same ease-out curve the Godofreda site uses, so the motion feels related. */
export const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

const EASE_IN: [number, number, number, number] = [0.55, 0, 1, 0.45];

/** How long the first phrase holds before the statement starts cycling. */
export const ROTATION_FIRST_DELAY_MS: number = 3000;

export const ROTATION_INTERVAL_MS: number = 2600;

export const SCRAMBLE_DURATION_MS: number = 900;

export const SCRAMBLE_GLYPHS: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/<>_+';

export const COUNT_DURATION_S: number = 1.6;

/** Spreads each phrase's letters across the word-reveal timeline, in word steps. */
export const CHAR_DELAY_STEP: number = 0.25;

export const PHRASE_VARIANTS: Variants = {
    [MotionState.Hidden]: {},
    [MotionState.Shown]: { transition: { staggerChildren: 0.022, delayChildren: 0.12 } },
    [MotionState.Gone]: { transition: { staggerChildren: 0.012 } },
};

export const CHAR_VARIANTS: Variants = {
    [MotionState.Hidden]: { y: '110%', rotate: 8 },
    [MotionState.Shown]: { y: '0%', rotate: 0, transition: { duration: 0.6, ease: EASE_OUT } },
    [MotionState.Gone]: { y: '-110%', rotate: -6, transition: { duration: 0.32, ease: EASE_IN } },
};
