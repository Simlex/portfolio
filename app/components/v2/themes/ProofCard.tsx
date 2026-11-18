import React from 'react';
import type { ThemeProof } from '@/app/types/v2';

interface ProofCardProps {
    proof: ThemeProof;
}

export default function ProofCard({ proof }: Readonly<ProofCardProps>): React.ReactElement {
    return (
        <div className="ev ev-proof">
            <p className="ev-type mono">Proof · {proof.source}</p>
            <div>
                <h3>{proof.title}</h3>
                <p>{proof.detail}</p>
            </div>
            <span className="ev-fig">{proof.figure}</span>
        </div>
    );
}
