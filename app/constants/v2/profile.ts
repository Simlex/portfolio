import { IconName, type ContactLink, type HeroFact, type SocialLink } from '@/app/types/v2';

export const PROFILE_NAME: string = 'Similoluwa Afolabi';

export const PROFILE_EYEBROW: string = 'Product engineer · Founder and CTO at Ticketsdeck';

export const PROFILE_LEDE: string[] = [
    'I build software products end to end: the web app, the mobile app, the API behind them, the console that runs them and the design system that keeps it all consistent.',
    "Right now I'm the founder and CTO of Ticketsdeck, and I lead frontend at CashDrive. Along the way I've built for teams in hiring, payroll, hospitality and commerce across Nigeria, the UK and South Africa.",
];

export const PROFILE_EMAIL: string = 'similoluwaafolabi@gmail.com';

export const HERO_FACTS: HeroFact[] = [
    { value: '25+', label: 'products built since 2021' },
    { value: '23,500+', label: 'commits authored across them' },
    { value: '10k+', label: 'users on Ticketsdeck Events' },
];

export const SOCIAL_LINKS: SocialLink[] = [
    { label: 'GitHub', href: 'https://github.com/simlex', icon: IconName.Github },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/simlex', icon: IconName.LinkedIn },
    { label: 'X', href: 'https://x.com/simlex_x', icon: IconName.X },
    { label: 'Behance', href: 'https://www.behance.net/simlexdesigns', icon: IconName.Behance },
];

export const CONTACT_HEADING: string = 'Got something to build?';

export const CONTACT_BODY: string =
    "I'm at my best owning a product end to end, or leading the team that does. Tell me what you're working on.";

export const CONTACT_LINKS: ContactLink[] = [
    { label: 'Call', value: '+234 806 592 6316', href: 'tel:+2348065926316' },
    { label: 'LinkedIn', value: 'in/simlex', href: 'https://linkedin.com/in/simlex' },
    { label: 'GitHub', value: '@simlex', href: 'https://github.com/simlex' },
    { label: 'X', value: '@simlex_x', href: 'https://x.com/simlex_x' },
    { label: 'Behance', value: 'simlexdesigns', href: 'https://www.behance.net/simlexdesigns' },
];
