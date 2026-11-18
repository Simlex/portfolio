import React from 'react';
import { TabIconName } from '@/app/types/v2';

function HomeIcon(): React.ReactElement {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 3.1a1.9 1.9 0 0 1 1.32.53l7.1 6.86c.24.23.08.63-.25.63H19.1v7.5c0 1.04-.84 1.88-1.88 1.88h-2.9a.6.6 0 0 1-.6-.6v-4.2a.6.6 0 0 0-.6-.6h-2.24a.6.6 0 0 0-.6.6v4.2a.6.6 0 0 1-.6.6h-2.9A1.88 1.88 0 0 1 4.9 18.6v-7.5H3.83c-.33 0-.49-.4-.25-.63l7.1-6.86A1.9 1.9 0 0 1 12 3.1Z" />
        </svg>
    );
}

function ShipLogIcon(): React.ReactElement {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <rect x="3" y="3" width="8" height="8" rx="2.2" />
            <rect x="13" y="3" width="8" height="8" rx="2.2" opacity="0.45" />
            <rect x="3" y="13" width="8" height="8" rx="2.2" opacity="0.45" />
            <rect x="13" y="13" width="8" height="8" rx="2.2" />
        </svg>
    );
}

function WorkIcon(): React.ReactElement {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M9 3.6A2.1 2.1 0 0 0 6.9 5.7v.9H5.4A2.4 2.4 0 0 0 3 9v2.2c0 .4.26.76.64.88 2.68.85 5.53 1.3 8.36 1.3s5.68-.45 8.36-1.3a.93.93 0 0 0 .64-.88V9a2.4 2.4 0 0 0-2.4-2.4h-1.5v-.9A2.1 2.1 0 0 0 15 3.6H9Zm6.6 3v-.9a.6.6 0 0 0-.6-.6H9a.6.6 0 0 0-.6.6v.9h7.2Z" />
            <path d="M3 13.6v4.3A2.4 2.4 0 0 0 5.4 20.3h13.2a2.4 2.4 0 0 0 2.4-2.4v-4.3a29 29 0 0 1-9 1.42c-3.14 0-6.18-.5-9-1.42Z" />
        </svg>
    );
}

function RolesIcon(): React.ReactElement {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <circle cx="12" cy="7.6" r="3.9" />
            <path d="M4.7 19.9a7.3 7.3 0 0 1 14.6 0 .9.9 0 0 1-.5.82A17.4 17.4 0 0 1 12 22.2c-2.42 0-4.71-.52-6.8-1.48a.9.9 0 0 1-.5-.82Z" />
        </svg>
    );
}

function ThemesIcon(): React.ReactElement {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2.6a7.2 7.2 0 0 0-4.3 12.98c.5.38.8.95.8 1.56v.36c0 .5.4.9.9.9h5.2c.5 0 .9-.4.9-.9v-.36c0-.61.3-1.18.8-1.56A7.2 7.2 0 0 0 12 2.6Z" />
            <path d="M9.6 19.9h4.8a.6.6 0 0 1 .58.76A2.3 2.3 0 0 1 12.76 22.4h-1.52a2.3 2.3 0 0 1-2.22-1.74.6.6 0 0 1 .58-.76Z" />
        </svg>
    );
}

function BooksIcon(): React.ReactElement {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M11.2 5.5A9.6 9.6 0 0 0 4.1 3.9a1.3 1.3 0 0 0-1.1 1.28v11.5c0 .76.66 1.34 1.4 1.26a8.3 8.3 0 0 1 6.8 2.02V5.5Z" />
            <path d="M12.8 5.5v14.46a8.3 8.3 0 0 1 6.8-2.02 1.27 1.27 0 0 0 1.4-1.26V5.18a1.3 1.3 0 0 0-1.1-1.28 9.6 9.6 0 0 0-7.1 1.6Z" opacity="0.6" />
        </svg>
    );
}

function EngineeringIcon(): React.ReactElement {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="m8.5 7.5-4.5 4.5 4.5 4.5M15.5 7.5l4.5 4.5-4.5 4.5" />
        </svg>
    );
}

function ContactIcon(): React.ReactElement {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M2 8.9v8.35a2.9 2.9 0 0 0 2.9 2.9h14.2a2.9 2.9 0 0 0 2.9-2.9V8.9l-8.72 5.36a2.9 2.9 0 0 1-3.04 0L2 8.9Z" />
            <path d="M22 7.2v-.35a2.9 2.9 0 0 0-2.9-2.9H4.9A2.9 2.9 0 0 0 2 6.85v.35l9.48 5.83c.32.2.72.2 1.04 0L22 7.2Z" />
        </svg>
    );
}

const TAB_ICONS: Record<TabIconName, () => React.ReactElement> = {
    [TabIconName.Home]: HomeIcon,
    [TabIconName.Themes]: ThemesIcon,
    [TabIconName.Books]: BooksIcon,
    [TabIconName.Engineering]: EngineeringIcon,
    [TabIconName.ShipLog]: ShipLogIcon,
    [TabIconName.Work]: WorkIcon,
    [TabIconName.Roles]: RolesIcon,
    [TabIconName.Contact]: ContactIcon,
};

export default function TabIcon({ name }: { name: TabIconName }): React.ReactElement {
    const Icon = TAB_ICONS[name];
    return <Icon />;
}
