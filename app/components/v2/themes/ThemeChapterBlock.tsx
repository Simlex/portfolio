import React from 'react';
import type { ThemeChapter } from '@/app/types/v2';
import { essaysFor } from '@/app/utils/essays';
import EssayCard from './EssayCard';
import ProofCard from './ProofCard';

interface ThemeChapterBlockProps {
    theme: ThemeChapter;
}

/** One theme: the claim on the left, and the proof and writing behind it on the right. */
export default function ThemeChapterBlock({ theme }: Readonly<ThemeChapterBlockProps>): React.ReactElement {
    const headingId: string = `${theme.id}-heading`;

    return (
        <article className="chapter" id={theme.id} aria-labelledby={headingId}>
            <div className="chapter-lead">
                <p className="kicker mono">{theme.kicker}</p>
                <h2 className="display" id={headingId}>
                    {theme.title}
                </h2>
                <p>{theme.thesis}</p>
            </div>
            <div className="evidence">
                <ProofCard proof={theme.proof} />
                {essaysFor(theme.essays).map((essay) => (
                    <EssayCard key={essay.slug} essay={essay} />
                ))}
            </div>
        </article>
    );
}
