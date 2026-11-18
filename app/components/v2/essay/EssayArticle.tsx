import React from 'react';
import Link from 'next/link';
import { PROFILE_NAME } from '@/app/constants/v2/profile';
import { RoutePath, SectionId, type Essay } from '@/app/types/v2';
import { essayHref, nextEssay } from '@/app/utils/essays';

interface EssayArticleProps {
    essay: Essay;
}

export default function EssayArticle({ essay }: Readonly<EssayArticleProps>): React.ReactElement {
    const next: Essay = nextEssay(essay.slug);

    return (
        <article className="essay wrap" id={SectionId.Top}>
            <Link className="ext" href={RoutePath.Home}>
                Back to home
            </Link>
            <p className="kicker mono">
                {essay.kicker} · {essay.readTime} read
            </p>
            <h1 className="display">{essay.title}</h1>
            <div className="essay-body">
                {essay.blocks.map((block) => (
                    <p key={block.text}>
                        {block.lead ? <b>{block.lead} </b> : null}
                        {block.text}
                    </p>
                ))}
            </div>
            <p className="essay-by mono">{PROFILE_NAME}</p>
            <Link className="essay-next" href={essayHref(next.slug)}>
                <span className="mono">Read next</span>
                <b>{next.title}</b>
            </Link>
        </article>
    );
}
