import React from 'react';

interface Props {
    id: string;
    title: string;
    description: string;
}

export default function SectionHead({ id, title, description }: Props): React.ReactElement {
    return (
        <div className="sec-head">
            <h2 className="display" id={`${id}-heading`}>
                {title}
            </h2>
            <p>{description}</p>
        </div>
    );
}
