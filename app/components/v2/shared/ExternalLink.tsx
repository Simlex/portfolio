import React from 'react';
import type { SiteLink } from '@/app/types/v2';
import { ArrowOutIcon } from './icons';

export default function ExternalLink({ link }: { link: SiteLink }): React.ReactElement {
    return (
        <a className="ext" href={link.href} target="_blank" rel="noopener">
            {link.label}
            <ArrowOutIcon />
        </a>
    );
}
