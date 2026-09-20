import React from 'react';
import { ROLES, ROLES_INTRO } from '@/app/constants/v2/roles';
import { SectionId, type RoleEntry } from '@/app/types/v2';
import SectionHead from '../shared/SectionHead';

function RoleOrg({ role }: { role: RoleEntry }): React.ReactElement | null {
    if (!role.orgName) {
        return null;
    }
    if (!role.orgHref) {
        return (
            <>
                , <span className="org">{role.orgName}</span>
            </>
        );
    }
    return (
        <>
            ,{' '}
            <a href={role.orgHref} target="_blank" rel="noopener">
                {role.orgName}
            </a>
        </>
    );
}

export default function RolesSection(): React.ReactElement {
    return (
        <section className="sec sec-flush wrap" id={SectionId.Roles} aria-labelledby="roles-heading">
            <SectionHead id="roles" title="Roles" description={ROLES_INTRO} />
            <ol className="roles">
                {ROLES.map((role) => (
                    <li className="role" key={`${role.title}-${role.period}`}>
                        <span className="when mono">{role.period}</span>
                        <div>
                            <h3>
                                {role.title}
                                <RoleOrg role={role} />
                            </h3>
                            <p>{role.description}</p>
                        </div>
                    </li>
                ))}
            </ol>
        </section>
    );
}
