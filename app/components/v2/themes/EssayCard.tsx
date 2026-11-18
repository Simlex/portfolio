import React from 'react';
import Link from 'next/link';
import type { Essay } from '@/app/types/v2';
import { essayHref } from '@/app/utils/essays';

interface EssayCardProps {
    essay: Essay;
}

export default function EssayCard({ essay }: Readonly<EssayCardProps>): React.ReactElement {
    return (
        <div className="ev">
            <p className="ev-type mono">Short read · {essay.readTime}</p>
            <div>
                <h3>{essay.title}</h3>
                <p>{essay.summary}</p>
            </div>
            <Link className="ext" href={essayHref(essay.slug)} aria-label={`Read: ${essay.title}`}>
                Read
            </Link>
        </div>
    );
}
