'use client';

import React from 'react';
import { LayoutGroup, motion } from 'framer-motion';
import { TAB_ITEMS } from '@/app/constants/v2/sections';
import useActiveSection from '@/app/hooks/useActiveSection';
import useCompactOnScroll from '@/app/hooks/useCompactOnScroll';
import usePrefersReducedMotion from '@/app/hooks/usePrefersReducedMotion';
import type { TabItem } from '@/app/types/v2';
import TabIcon from './tabIcons';

/** Close to the iOS tab bar: quick, slightly springy, no overshoot worth noticing. */
const LENS_SPRING = { type: 'spring', stiffness: 520, damping: 38, mass: 0.8 } as const;

interface TabProps {
    tab: TabItem;
    isActive: boolean;
    isStill: boolean;
}

function Tab({ tab, isActive, isStill }: TabProps): React.ReactElement {
    return (
        <motion.a
            className="tab"
            href={`#${tab.id}`}
            aria-current={isActive ? 'location' : undefined}
            whileTap={isStill ? undefined : { scale: 0.92 }}
        >
            {isActive ? (
                <motion.span
                    className="tab-lens"
                    layoutId="tab-lens"
                    transition={isStill ? { duration: 0 } : LENS_SPRING}
                />
            ) : null}
            <TabIcon name={tab.icon} />
            <span className="tab-label">{tab.label}</span>
        </motion.a>
    );
}

export default function MobileTabBar(): React.ReactElement {
    const active = useActiveSection();
    const isCompact = useCompactOnScroll();
    const isStill = usePrefersReducedMotion();

    return (
        <nav className="tabbar" data-compact={isCompact} aria-label="Sections">
            <LayoutGroup>
                {TAB_ITEMS.map((tab) => (
                    <Tab key={tab.id} tab={tab} isActive={tab.id === active} isStill={isStill} />
                ))}
            </LayoutGroup>
        </nav>
    );
}
