import React from 'react';

interface RevealWordsProps {
    words: string[];
}

/** Each word rises out of its own mask. The entrance is pure CSS, so it plays before hydration. */
export default function RevealWords({ words }: Readonly<RevealWordsProps>): React.ReactElement {
    return (
        <>
            {words.map((word, index) => (
                <React.Fragment key={`${word}-${index}`}>
                    <span className="mask">
                        <span className="rise intro" style={{ '--i': index } as React.CSSProperties}>
                            {word}
                        </span>
                    </span>{' '}
                </React.Fragment>
            ))}
        </>
    );
}
