import React from 'react';
import Image from 'next/image';
import type { CaseStudy } from '@/app/types/v2';
import ExternalLink from '../shared/ExternalLink';

interface Props {
    study: CaseStudy;
    isFirst: boolean;
}

export default function CaseStudyBlock({ study, isFirst }: Props): React.ReactElement {
    return (
        <article className="case" id={study.id}>
            <figure className="shot">
                <div className="shot-bar" aria-hidden="true">
                    <span className="dot" />
                    <span className="dot" />
                    <span className="dot" />
                    <span className="mono">{study.frameLabel}</span>
                </div>
                <Image
                    src={study.image}
                    alt={study.imageAlt}
                    sizes="(max-width: 980px) 100vw, 640px"
                    placeholder="blur"
                    priority={isFirst}
                />
            </figure>
            <div>
                <p className="kicker mono">{study.kicker}</p>
                <h3 className="display">{study.name}</h3>
                <p className="pitch">{study.pitch}</p>
                <ul className="did">
                    {study.highlights.map((highlight) => (
                        <li key={highlight.slice(0, 32)}>{highlight}</li>
                    ))}
                </ul>
                <p className="stack mono">{study.stack.join(' · ')}</p>
                <div className="case-foot">
                    <span className="mono">{study.stats.join(' · ')}</span>
                    {study.link ? <ExternalLink link={study.link} /> : null}
                </div>
            </div>
        </article>
    );
}
