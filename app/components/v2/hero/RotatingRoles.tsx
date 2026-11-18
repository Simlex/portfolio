'use client';

import React from 'react';
import { ROLE_INTERVAL_MS } from '@/app/constants/v2/heroMotion';
import useCycle from '@/app/hooks/useCycle';
import usePrefersReducedMotion from '@/app/hooks/usePrefersReducedMotion';
import useScramble from '@/app/hooks/useScramble';

interface RotatingRolesProps {
    roles: string[];
    className?: string;
}

/**
 * The role line beside the name. It decodes into each role in turn, forever. Screen readers get
 * every role once, and with reduced motion it stays on the first.
 */
export default function RotatingRoles({ roles, className }: Readonly<RotatingRolesProps>): React.ReactElement {
    const prefersReducedMotion = usePrefersReducedMotion();
    const index = useCycle(roles.length, ROLE_INTERVAL_MS, !prefersReducedMotion);
    const display = useScramble(roles[index], !prefersReducedMotion);

    return (
        <p className={className}>
            <span className="sr">{roles.join(', ')}</span>
            <span aria-hidden="true">{display}</span>
        </p>
    );
}
