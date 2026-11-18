import {
    IconName,
    SectionId,
    type ContactCopy,
    type ContactLink,
    type HeroContent,
    type HeroFact,
    type SocialLink,
} from '@/app/types/v2';

export const PROFILE_NAME: string = 'Similoluwa Afolabi';

export const PROFILE_EYEBROW: string = 'Founder and CTO at Ticketsdeck';

/** The line beside the name cycles through these forever, starting on the first. */
export const PROFILE_ROLES: string[] = [
    PROFILE_EYEBROW,
    'CTO at Aimpexx',
    'Co-founder at Godofreda',
    'Lead design engineer at CashDrive',
];

export const PROFILE_EMAIL: string = 'hello@simlexltd.com';

const MAILTO: string =`mailto:${PROFILE_EMAIL}`;

const EMAIL_LABEL: string = 'Email me';

export const HERO_FACTS: HeroFact[] = [
    { value: '25+', label: 'products led or built since 2021' },
    { value: '24,500+', label: 'commits authored across them' },
    { value: '10k+', label: 'users on Ticketsdeck Events' },
];

export const HOME_HERO: HeroContent = {
    statementLead: 'Three questions shape the companies I build',
    statementPhrases: ['and the teams I lead'],
    summary:
        'How do you earn trust when money moves online? What do event organisers and creators need to stay in business? How far can a small team go? Each one below comes with the work and the writing behind it.',
    ctas: [
        { label: 'Invite me to speak', href: `${MAILTO}?subject=Speaking%20invite` },
        { label: EMAIL_LABEL, href: MAILTO, isGhost: true },
    ],
    facts: [],
};

/** The dev page's last statement line cycles through its phrases once, then settles back on the first. */
export const DEV_HERO: HeroContent = {
    statementLead: 'I lead the teams that turn business problems into',
    statementPhrases: ['products people pay for', 'platforms teams run on', 'experiences people share'],
    summary:
        "Founder and CTO of Ticketsdeck, a platform for building experiences. At Aimpexx I lead tech innovation and drive growth across Nigeria and Ghana. I also lead frontend at CashDrive, and I've worked with teams in hiring, payroll, hospitality and commerce across Nigeria, the UK and South Africa.",
    ctas: [
        { label: EMAIL_LABEL, href: MAILTO },
        { label: 'See the work', href: `#${SectionId.Work}`, isGhost: true },
    ],
    facts: HERO_FACTS,
};

export const IMPACT_FIGURES: HeroFact[] = [
    { value: '₦15bn+', label: 'moved through our systems' },
    { value: '10k+', label: 'loans supported' },
    { value: '4 to 10', label: 'people on each team I lead' },
    { value: '20+', label: 'people mentored' },
];

export const SOCIAL_LINKS: SocialLink[] = [
    { label: 'GitHub', href: 'https://github.com/simlex', icon: IconName.Github },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/simlex', icon: IconName.LinkedIn },
    { label: 'X', href: 'https://x.com/simlex_x', icon: IconName.X },
    { label: 'Behance', href: 'https://www.behance.net/simlexdesigns', icon: IconName.Behance },
];

export const HOME_CONTACT: ContactCopy = {
    heading: "Let's talk",
    body: 'For speaking, partnerships, or a hard product problem you want a second view on.',
};

export const DEV_CONTACT: ContactCopy = {
    heading: 'Got something to build?',
    body: "I'm at my best when I own the outcome: the product, the team behind it and the numbers it has to move. Tell me what you're working on.",
};

export const CONTACT_LINKS: ContactLink[] = [
    { label: 'Call', value: '+234 806 592 6316', href: 'tel:+2348065926316' },
    { label: 'LinkedIn', value: 'in/simlex', href: 'https://linkedin.com/in/simlex' },
    { label: 'GitHub', value: '@simlex', href: 'https://github.com/simlex' },
    { label: 'X', value: '@simlex_x', href: 'https://x.com/simlex_x' },
    { label: 'Behance', value: 'simlexdesigns', href: 'https://www.behance.net/simlexdesigns' },
];
