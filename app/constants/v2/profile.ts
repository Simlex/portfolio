import { IconName, type ContactLink, type HeroFact, type SocialLink } from '@/app/types/v2';

export const PROFILE_NAME: string = 'Similoluwa Afolabi';

export const PROFILE_EYEBROW: string = 'Founder and CTO at Ticketsdeck';

export const PROFILE_STATEMENT_LEAD: string = 'I lead the teams that turn business problems into';

/** The statement's last line cycles through these once, then settles back on the first. */
export const PROFILE_STATEMENT_PHRASES: string[] = [
    'products people pay for',
    'platforms teams run on',
    'experiences people share',
];

export const PROFILE_SUMMARY: string =
    "Founder and CTO of Ticketsdeck, a platform for building experiences. At Aimpexx I lead tech innovation and drive growth across Nigeria and Ghana. I also lead frontend at CashDrive, and I've worked with teams in hiring, payroll, hospitality and commerce across Nigeria, the UK and South Africa.";

export const PROFILE_EMAIL: string = 'similoluwaafolabi@gmail.com';

export const HERO_FACTS: HeroFact[] = [
    { value: '25+', label: 'products led or built since 2021' },
    { value: '24,500+', label: 'commits authored across them' },
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
    "I'm at my best when I own the outcome: the product, the team behind it and the numbers it has to move. Tell me what you're working on.";

export const CONTACT_LINKS: ContactLink[] = [
    { label: 'Call', value: '+234 806 592 6316', href: 'tel:+2348065926316' },
    { label: 'LinkedIn', value: 'in/simlex', href: 'https://linkedin.com/in/simlex' },
    { label: 'GitHub', value: '@simlex', href: 'https://github.com/simlex' },
    { label: 'X', value: '@simlex_x', href: 'https://x.com/simlex_x' },
    { label: 'Behance', value: 'simlexdesigns', href: 'https://www.behance.net/simlexdesigns' },
];
