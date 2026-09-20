import React from 'react';
import type { ProjectEntry } from '@/app/types/v2';
import { ArrowDownIcon, ArrowOutIcon } from '../shared/icons';

interface Props {
    project: ProjectEntry;
    isVisible: boolean;
}

function RowContent({ project }: { project: ProjectEntry }): React.ReactElement {
    return (
        <>
            <span className="nm">{project.name}</span>
            <span className="what">
                {project.summary}
                <small>{project.detail}</small>
            </span>
            <span className="part">{project.part}</span>
            <span className="yr">{project.years}</span>
            <span className={project.href ? 'go' : undefined}>
                {project.href ? project.isExternal ? <ArrowOutIcon /> : <ArrowDownIcon /> : null}
            </span>
        </>
    );
}

export default function ProjectRow({ project, isVisible }: Props): React.ReactElement {
    const external = project.isExternal ? { target: '_blank', rel: 'noopener' } : {};

    return (
        <li id={project.id} hidden={!isVisible}>
            {project.href ? (
                <a className="row" href={project.href} {...external}>
                    <RowContent project={project} />
                </a>
            ) : (
                <div className="row">
                    <RowContent project={project} />
                </div>
            )}
        </li>
    );
}
