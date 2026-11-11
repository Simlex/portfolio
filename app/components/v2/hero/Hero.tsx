import React from 'react';
import {
    HERO_FACTS,
    PROFILE_EMAIL,
    PROFILE_EYEBROW,
    PROFILE_NAME,
    PROFILE_STATEMENT_LEAD,
    PROFILE_STATEMENT_PHRASES,
    PROFILE_SUMMARY,
    SOCIAL_LINKS,
} from '@/app/constants/v2/profile';
import { SectionId } from '@/app/types/v2';
import { statementLabel } from '@/app/utils/heroText';
import { SocialIcon } from '../shared/icons';
import CountUpFigure from './CountUpFigure';
import RevealWords from './RevealWords';
import RotatingPhrase from './RotatingPhrase';
import ScrambleText from './ScrambleText';

const LEAD_WORDS: string[] = PROFILE_STATEMENT_LEAD.split(' ');

export default function Hero(): React.ReactElement {
    return (
        <section className="hero wrap" id={SectionId.Top} aria-labelledby="hero-statement">
            <div className="sig fade">
                <p className="sig-name display">{PROFILE_NAME}</p>
                <ScrambleText className="kicker mono" text={PROFILE_EYEBROW} />
            </div>

            <h1 className="statement display" id="hero-statement">
                <span className="sr">{statementLabel(PROFILE_STATEMENT_LEAD, PROFILE_STATEMENT_PHRASES)}</span>
                <span aria-hidden="true">
                    <RevealWords words={LEAD_WORDS} />
                    <RotatingPhrase phrases={PROFILE_STATEMENT_PHRASES} startIndex={LEAD_WORDS.length} />
                </span>
            </h1>

            <div className="hero-grid">
                <p className="summary fade fade-2">{PROFILE_SUMMARY}</p>
                <div className="hero-side fade fade-3">
                    <div className="cta">
                        <a className="btn" href={`mailto:${PROFILE_EMAIL}`}>
                            Email me
                        </a>
                        <a className="btn ghost" href={`#${SectionId.Work}`}>
                            See the work
                        </a>
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

            <dl className="facts fade fade-4">
                {HERO_FACTS.map((fact) => (
                    <div key={fact.label}>
                        <dt>{fact.label}</dt>
                        <CountUpFigure value={fact.value} />
                    </div>
                ))}
            </dl>
        </section>
    );
}
