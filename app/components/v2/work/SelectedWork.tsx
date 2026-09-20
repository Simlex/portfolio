import React from 'react';
import { CASE_STUDIES, SELECTED_WORK_INTRO } from '@/app/constants/v2/caseStudies';
import { SectionId } from '@/app/types/v2';
import SectionHead from '../shared/SectionHead';
import CaseStudyBlock from './CaseStudyBlock';

export default function SelectedWork(): React.ReactElement {
    return (
        <section className="sec wrap" id={SectionId.Work} aria-labelledby="work-heading">
            <SectionHead id="work" title="Selected work" description={SELECTED_WORK_INTRO} />
            {CASE_STUDIES.map((study, index) => (
                <CaseStudyBlock key={study.id} study={study} isFirst={index === 0} />
            ))}
        </section>
    );
}
