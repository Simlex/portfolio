import React from 'react';
import Image from 'next/image';
import type { ModuleLine, ProjectCardEntry } from '@/app/types/v2';
import ExternalLink from '../shared/ExternalLink';

function ModulePanel({ caption, modules }: { caption?: string; modules: ModuleLine[] }): React.ReactElement {
    return (
        <div className="panel" role="img" aria-label={caption ?? 'Modules I built'}>
            {caption ? <span className="cap">{caption}</span> : null}
            {modules.map((module) => (
                <span key={module.name}>
                    <span className="k">{module.name}</span> <b>{module.detail}</b>
                </span>
            ))}
        </div>
    );
}

export default function ProjectCard({ project }: { project: ProjectCardEntry }): React.ReactElement {
    return (
        <article className="card" id={project.id}>
            {project.image ? (
                <Image
                    src={project.image}
                    alt={project.imageAlt ?? project.name}
                    sizes="(max-width: 860px) 100vw, 380px"
                    placeholder="blur"
                />
            ) : null}
            {project.modules ? <ModulePanel caption={project.modulesCaption} modules={project.modules} /> : null}
            <div className="card-body">
                <p className="kicker mono">{project.kicker}</p>
                <h3 className="display">{project.name}</h3>
                <p className="desc">{project.description}</p>
                <p className="stack mono">{project.stack.join(' · ')}</p>
                <div className="case-foot">
                    <span className="mono">{project.stats.join(' · ')}</span>
                    {project.link ? <ExternalLink link={project.link} /> : null}
                </div>
            </div>
        </article>
    );
}
