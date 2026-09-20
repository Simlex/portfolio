import React from 'react';
import { PROFILE_NAME } from '@/app/constants/v2/profile';

export default function SiteFooter(): React.ReactElement {
    return (
        <footer className="wrap foot mono">
            <span>© {new Date().getFullYear()} {PROFILE_NAME}</span>
            <span>Portfolio v2</span>
        </footer>
    );
}
