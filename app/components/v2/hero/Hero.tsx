import React from 'react';
import {
    HERO_FACTS,
    PROFILE_EMAIL,
    PROFILE_EYEBROW,
    PROFILE_LEDE,
    PROFILE_NAME,
    SOCIAL_LINKS,
} from '@/app/constants/v2/profile';
import { SectionId } from '@/app/types/v2';
import { SocialIcon } from '../shared/icons';

export default function Hero(): React.ReactElement {
    const [firstName, lastName] = PROFILE_NAME.split(' ');

    return (
        <section className="hero wrap" id={SectionId.Top} aria-labelledby="hero-name">
            <p className="kicker mono">{PROFILE_EYEBROW}</p>
            <h1 className="name display" id="hero-name">
                <span>{firstName}</span>
                <span>{lastName}</span>
            </h1>

            <div className="hero-grid">
                <div>
                    {PROFILE_LEDE.map((paragraph) => (
                        <p className="lede" key={paragraph.slice(0, 24)}>
                            {paragraph}
                        </p>
                    ))}
                </div>
                <div className="hero-side">
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

            <dl className="facts">
                {HERO_FACTS.map((fact) => (
                    <div key={fact.label}>
                        <dt>{fact.label}</dt>
                        <dd>{fact.value}</dd>
                    </div>
                ))}
            </dl>
        </section>
    );
}
