'use client';

import React, { useState } from 'react';
import { ALL_PROJECTS_FILTER, PROJECTS, PROJECT_FILTERS, PROJECT_INDEX_INTRO } from '@/app/constants/v2/projects';
import { ProjectCategory, SectionId, type ProjectEntry } from '@/app/types/v2';
import SectionHead from '../shared/SectionHead';
import ProjectRow from './ProjectRow';

function matchesFilter(project: ProjectEntry, filter: string): boolean {
    if (filter === ALL_PROJECTS_FILTER) {
        return true;
    }
    return project.categories.includes(filter as ProjectCategory);
}

function countFor(filter: string): number {
    return PROJECTS.filter((project) => matchesFilter(project, filter)).length;
}

export default function ProjectIndex(): React.ReactElement {
    const [filter, setFilter] = useState<string>(ALL_PROJECTS_FILTER);
    const shown = countFor(filter);

    return (
        <section className="sec sec-flush wrap" id={SectionId.Index} aria-labelledby="index-heading">
            <SectionHead id="index" title="Everything I've built" description={PROJECT_INDEX_INTRO} />

            <div className="chips" role="group" aria-label="Filter projects">
                {PROJECT_FILTERS.map((option) => (
                    <button
                        key={option.value}
                        className="chip"
                        type="button"
                        aria-pressed={filter === option.value}
                        onClick={() => setFilter(option.value)}
                    >
                        {option.label} <span>{countFor(option.value)}</span>
                    </button>
                ))}
            </div>

            <ul className="idx">
                {PROJECTS.map((project) => (
                    <ProjectRow key={project.id} project={project} isVisible={matchesFilter(project, filter)} />
                ))}
            </ul>

            <p className="idx-count mono" aria-live="polite">
                Showing {shown} of {PROJECTS.length} projects
            </p>
        </section>
    );
}
