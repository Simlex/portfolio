import React from 'react';
import { ALSO_BUILT, ALSO_BUILT_INTRO } from '@/app/constants/v2/alsoBuilt';
import { SectionId } from '@/app/types/v2';
import SectionHead from '../shared/SectionHead';
import ProjectCard from './ProjectCard';

export default function AlsoBuilt(): React.ReactElement {
    return (
        <section className="sec sec-flush wrap" id={SectionId.More} aria-labelledby="more-heading">
            <SectionHead id="more" title="Also built" description={ALSO_BUILT_INTRO} />
            <div className="more">
                {ALSO_BUILT.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
}
