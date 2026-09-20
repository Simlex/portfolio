'use client';

import React from 'react';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '../shared/icons';

export default function ThemeToggle(): React.ReactElement {
    const { resolvedTheme, setTheme } = useTheme();

    const handleClick = (): void => {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
    };

    return (
        <button className="theme" type="button" onClick={handleClick} aria-label="Switch between light and dark theme">
            <span className="sun">
                <SunIcon />
            </span>
            <span className="moon">
                <MoonIcon />
            </span>
        </button>
    );
}
