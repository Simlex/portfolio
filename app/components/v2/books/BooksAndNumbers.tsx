import React from 'react';
import Link from 'next/link';
import { IMPACT_FIGURES } from '@/app/constants/v2/profile';
import { BOOKS, BOOKS_HEADING, NUMBERS_HEADING, SPINE_LEVELS } from '@/app/constants/v2/themes';
import { RoutePath, SectionId } from '@/app/types/v2';
import CountUpFigure from '../hero/CountUpFigure';

const BOOKS_HEADING_ID: string = 'books-heading';

function spineClass(index: number): string {
    return `l${SPINE_LEVELS[index % SPINE_LEVELS.length]}`;
}

export default function BooksAndNumbers(): React.ReactElement {
    return (
        <section className="sec wrap duo" id={SectionId.Books} aria-labelledby={BOOKS_HEADING_ID}>
            <div>
                <h2 className="display" id={BOOKS_HEADING_ID}>
                    {BOOKS_HEADING}
                </h2>
                <ul className="shelf">
                    {BOOKS.map((book, index) => (
                        <li className="book" key={book.title}>
                            <i className={spineClass(index)} aria-hidden="true" />
                            <div>
                                <h3>{book.title}</h3>
                                <p className="mono">{book.isCurrent ? `${book.author} · reading now` : book.author}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h2 className="display">{NUMBERS_HEADING}</h2>
                <dl className="figures">
                    {IMPACT_FIGURES.map((figure) => (
                        <div key={figure.label}>
                            <dt>{figure.label}</dt>
                            <CountUpFigure value={figure.value} />
                        </div>
                    ))}
                </dl>
                <Link className="ext duo-more" href={RoutePath.Dev}>
                    See the full engineering record on /dev
                </Link>
            </div>
        </section>
    );
}
