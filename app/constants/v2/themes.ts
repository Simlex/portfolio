import { EssaySlug, type Book, type ThemeChapter } from '@/app/types/v2';

export const THEMES: ThemeChapter[] = [
    {
        id: 'commerce',
        kicker: 'Commerce',
        title: 'Trust in African commerce',
        thesis: "People pay when they believe the goods or payment they expect will land when due. I've spent years on the ledgers and systems that make that happen.",
        proof: {
            source: 'CashDrive, Ticketsdeck, Aimpexx',
            title: 'Money moved through systems my teams built',
            detail: 'Across lending, ticket sales and trade.',
            figure: '₦15bn+',
        },
        essays: [EssaySlug.WorstDay, EssaySlug.StartByHand],
    },
    {
        id: 'culture',
        kicker: 'Culture',
        title: 'The experience and creator economy',
        thesis: "Nigeria's organisers and creators run real businesses. Ticketsdeck exists to give them solutions that match.",
        proof: {
            source: 'Ticketsdeck',
            title: 'People using a platform we started from nothing',
            detail: '120+ events, over 10k happy customers and a creator marketplace in flight.',
            figure: '10k+',
        },
        essays: [EssaySlug.SmallestPart],
    },
    {
        id: 'leadership',
        kicker: 'Leadership',
        title: 'Small teams, outsized output',
        thesis: 'Every product here came from a team of four to ten. I care about how those teams are hired, trusted and grown.',
        proof: {
            source: 'Mentoring',
            title: 'People mentored, directly and indirectly',
            detail: "Engineers and designers who've gone on to lead work of their own.",
            figure: '20+',
        },
        essays: [EssaySlug.TeamOfSix, EssaySlug.Character],
    },
];

export const BOOKS_HEADING: string = 'Books I read';

export const NUMBERS_HEADING: string = 'By the numbers';

export const BOOKS: Book[] = [
    { title: 'The Psychology of Money', author: 'Morgan Housel', isCurrent: true },
    { title: 'Deep Work', author: 'Cal Newport' },
    { title: 'Start with Why', author: 'Simon Sinek' },
    { title: 'Why You Act the Way You Do', author: 'Tim LaHaye' },
];

/** Heat shades for the book spines, strongest first, echoing the ship log. */
export const SPINE_LEVELS: number[] = [5, 4, 3, 2];
