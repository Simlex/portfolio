import React from 'react';
import { PROFILE_NAME, PROFILE_ROLES, SOCIAL_LINKS } from '@/app/constants/v2/profile';
import type { HeroContent } from '@/app/types/v2';
import { statementLabel } from '@/app/utils/heroText';
import { SocialIcon } from '../shared/icons';
import CountUpFigure from './CountUpFigure';
import RevealWords from './RevealWords';
import RotatingPhrase from './RotatingPhrase';
import RotatingRoles from './RotatingRoles';
import ScrollLinkedHero from './ScrollLinkedHero';

const STATEMENT_ID: string = 'hero-statement';

interface HeroProps {
    content: HeroContent;
}

export default function Hero({ content }: Readonly<HeroProps>): React.ReactElement {
    const leadWords: string[] = content.statementLead.split(' ');

    return (
        <ScrollLinkedHero labelledBy={STATEMENT_ID}>
            <div className="sig fade">
                <p className="sig-name display">{PROFILE_NAME}</p>
                <RotatingRoles className="kicker mono" roles={PROFILE_ROLES} />
            </div>

            <h1 className="statement display" id={STATEMENT_ID}>
                <span className="sr">{statementLabel(content.statementLead, content.statementPhrases)}</span>
                <span aria-hidden="true">
                    <RevealWords words={leadWords} />
                    <RotatingPhrase phrases={content.statementPhrases} startIndex={leadWords.length} />
                </span>
            </h1>

            <div className="hero-grid">
                <p className="summary fade fade-2">{content.summary}</p>
                <div className="hero-side fade fade-3">
                    <div className="cta">
                        {content.ctas.map((cta) => (
                            <a key={cta.label} className={cta.isGhost ? 'btn ghost' : 'btn'} href={cta.href}>
                                {cta.label}
                            </a>
                        ))}
                    </div>
                    <div className="socials">
                        {SOCIAL_LINKS.map((link) => (
                            <a key={link.label} href={link.href} target="_blank" rel="noopener" aria-label={link.label}>
                                <SocialIcon name={link.icon} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {content.facts.length > 0 ? (
                <dl className="facts fade fade-4">
                    {content.facts.map((fact) => (
                        <div key={fact.label}>
                            <dt>{fact.label}</dt>
                            <CountUpFigure value={fact.value} />
                        </div>
                    ))}
                </dl>
            ) : null}
        </ScrollLinkedHero>
    );
}
