'use client';

import React, { useRef } from 'react';
import useCursorFollower from '@/app/hooks/useCursorFollower';
import usePrefersReducedMotion from '@/app/hooks/usePrefersReducedMotion';

export default function CustomCursor(): React.ReactElement {
    const rootRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);
    const dotRef = useRef<HTMLDivElement>(null);
    const isStill = usePrefersReducedMotion();

    useCursorFollower(rootRef, ringRef, dotRef, isStill);

    return (
        <div className="cursor" ref={rootRef} data-visible="false" aria-hidden="true">
            <div className="cursor-ring" ref={ringRef} />
            <div className="cursor-dot" ref={dotRef} />
        </div>
    );
}
