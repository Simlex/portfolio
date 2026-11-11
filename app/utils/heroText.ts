import { SCRAMBLE_GLYPHS } from '@/app/constants/v2/heroMotion';
import type { Figure } from '@/app/types/v2';

const NUMBER_CHARS: string = '0123456789,.';

function isNumberChar(char: string): boolean {
    return NUMBER_CHARS.includes(char);
}

/** Reads "24,500+" as 24500 with a "+" suffix. Returns null when there is no number to count. */
export function parseFigure(value: string): Figure | null {
    const chars = Array.from(value);
    const start = chars.findIndex(isNumberChar);
    if (start === -1) {
        return null;
    }
    const length = chars.slice(start).findIndex((char) => !isNumberChar(char));
    const end = length === -1 ? chars.length : start + length;
    const target = Number(chars.slice(start, end).join('').replaceAll(',', ''));
    if (!Number.isFinite(target)) {
        return null;
    }
    return { prefix: chars.slice(0, start).join(''), target, suffix: chars.slice(end).join('') };
}

export function formatFigure(figure: Figure, current: number): string {
    return `${figure.prefix}${Math.round(current).toLocaleString('en-US')}${figure.suffix}`;
}

function randomGlyph(): string {
    return SCRAMBLE_GLYPHS.charAt(Math.floor(Math.random() * SCRAMBLE_GLYPHS.length));
}

/** Letters resolve left to right as progress runs from 0 to 1. Spaces stay put. */
export function scrambleFrame(text: string, progress: number): string {
    const resolved = Math.floor(text.length * progress);
    return Array.from(text, (char, index) => (index < resolved || char === ' ' ? char : randomGlyph())).join('');
}

/** One sentence that names every phrase, for screen readers. */
export function statementLabel(lead: string, phrases: string[]): string {
    const last = phrases.at(-1) ?? '';
    const rest = phrases.slice(0, -1);
    const list = rest.length > 0 ? `${rest.join(', ')} and ${last}` : last;
    return `${lead} ${list}.`;
}
