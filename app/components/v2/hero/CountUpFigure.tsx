'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { animate, useInView } from 'framer-motion';
import { COUNT_DURATION_S, EASE_OUT } from '@/app/constants/v2/heroMotion';
import usePrefersReducedMotion from '@/app/hooks/usePrefersReducedMotion';
import { formatFigure, parseFigure } from '@/app/utils/heroText';

interface CountUpFigureProps {
    value: string;
}

/** Renders the final figure on the server, then counts up to it the first time it scrolls into view. */
export default function CountUpFigure({ value }: Readonly<CountUpFigureProps>): React.ReactElement {
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.6 });
    const prefersReducedMotion = usePrefersReducedMotion();
    const figure = useMemo(() => parseFigure(value), [value]);
    const [display, setDisplay] = useState<string>(value);

    useEffect(() => {
        if (!isInView || prefersReducedMotion || !figure) {
            return;
        }
        const controls = animate(0, figure.target, {
            duration: COUNT_DURATION_S,
            ease: EASE_OUT,
            onUpdate: (current: number): void => setDisplay(formatFigure(figure, current)),
        });
        return () => controls.stop();
    }, [isInView, prefersReducedMotion, figure]);

    return <dd ref={ref}>{display}</dd>;
}
