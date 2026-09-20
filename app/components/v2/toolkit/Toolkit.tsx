import React from 'react';
import { TOOLKIT, TOOLKIT_INTRO } from '@/app/constants/v2/roles';
import { SectionId } from '@/app/types/v2';
import SectionHead from '../shared/SectionHead';

export default function Toolkit(): React.ReactElement {
    return (
        <section className="sec sec-flush wrap" id={SectionId.Toolkit} aria-labelledby="toolkit-heading">
            <SectionHead id="toolkit" title="What I bring" description={TOOLKIT_INTRO} />
            <div className="kit">
                {TOOLKIT.map((entry) => (
                    <div key={entry.title}>
                        <h3>{entry.title}</h3>
                        <p>{entry.description}</p>
                        <p className="tools mono">{entry.tools.join(' · ')}</p>
                        <p className="used">{entry.usedIn}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
