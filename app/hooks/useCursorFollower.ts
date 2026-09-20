'use client';

import { useEffect, type RefObject } from 'react';

const POINTER_QUERY: string = '(hover: hover) and (pointer: fine)';
const INTERACTIVE: string = 'a, button, [role="button"], summary, label';
const CURSOR_CLASS: string = 'has-custom-cursor';

/** How much of the gap the ring closes each frame. Lower feels heavier. */
const RING_EASE: number = 0.18;

interface Point {
    x: number;
    y: number;
}

function place(element: HTMLElement, point: Point): void {
    element.style.transform = `translate3d(${point.x}px, ${point.y}px, 0)`;
}

/**
 * Drives a two-part cursor: a dot pinned to the pointer and a ring that trails it.
 * Does nothing on touch screens, where the default pointer stays.
 */
export default function useCursorFollower(
    rootRef: RefObject<HTMLDivElement>,
    ringRef: RefObject<HTMLDivElement>,
    dotRef: RefObject<HTMLDivElement>,
    isStill: boolean,
): void {
    useEffect(() => {
        const root = rootRef.current;
        const ring = ringRef.current;
        const dot = dotRef.current;
        if (!root || !ring || !dot || !window.matchMedia(POINTER_QUERY).matches) {
            return;
        }

        document.documentElement.classList.add(CURSOR_CLASS);

        const pointer: Point = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
        const trail: Point = { ...pointer };
        let frame = 0;

        const handleMove = (event: MouseEvent): void => {
            pointer.x = event.clientX;
            pointer.y = event.clientY;
            place(dot, pointer);
            root.dataset.visible = 'true';
            const target = event.target instanceof Element ? event.target.closest(INTERACTIVE) : null;
            root.dataset.hover = String(Boolean(target));
        };

        const render = (): void => {
            const ease = isStill ? 1 : RING_EASE;
            trail.x += (pointer.x - trail.x) * ease;
            trail.y += (pointer.y - trail.y) * ease;
            place(ring, trail);
            frame = window.requestAnimationFrame(render);
        };

        const handleLeave = (): void => {
            root.dataset.visible = 'false';
        };
        const handleDown = (): void => {
            root.dataset.pressed = 'true';
        };
        const handleUp = (): void => {
            root.dataset.pressed = 'false';
        };

        window.addEventListener('mousemove', handleMove, { passive: true });
        window.addEventListener('mousedown', handleDown);
        window.addEventListener('mouseup', handleUp);
        document.addEventListener('mouseleave', handleLeave);
        frame = window.requestAnimationFrame(render);

        return () => {
            window.cancelAnimationFrame(frame);
            window.removeEventListener('mousemove', handleMove);
            window.removeEventListener('mousedown', handleDown);
            window.removeEventListener('mouseup', handleUp);
            document.removeEventListener('mouseleave', handleLeave);
            document.documentElement.classList.remove(CURSOR_CLASS);
        };
    }, [rootRef, ringRef, dotRef, isStill]);
}
