import type { RoleEntry, ToolkitEntry } from '@/app/types/v2';

export const ROLES_INTRO: string =
    "I started as a designer, grew into engineering, and these days I'm usually the person who owns the whole build.";

export const ROLES: RoleEntry[] = [
    {
        period: 'Dec 2023 - now',
        title: 'Founder and CTO',
        orgName: 'Ticketsdeck',
        orgHref: 'https://events.ticketsdeck.com',
        description:
            'I set the technical direction and write most of the code: the web app, the API, the ops console and the company site. I also run the infrastructure.',
    },
    {
        period: 'Aug 2025 - now',
        title: 'Lead frontend engineer',
        orgName: 'CashDrive',
        orgHref: 'https://www.cashdrive.co',
        description:
            'The only frontend engineer across the borrower app, the back-office and the marketing site, working alongside the backend team.',
    },
    {
        period: 'Jun 2025 - Aug 2026',
        title: 'Software engineer',
        orgName: 'DESCASIO (PlugIQ)',
        orgHref: 'https://plugiq.io',
        description:
            'Frontend and backend features on a large no-code platform: the form builder, visibility rules, document signing and AI document intelligence.',
    },
    {
        period: '2024 - now',
        title: 'Independent product engineer',
        description:
            'Building for founders: Mirratal, Owaambe, ChequeIn, Oneflare, Godofreda, Stylist Piazza, SabiBid, Orineum and more. Often the only engineer, sometimes leading a small team.',
    },
    {
        period: 'May 2022 - Apr 2025',
        title: 'Intern to engineering team lead',
        orgName: 'Xown Solutions',
        orgHref: 'https://www.xownsolutions.com',
        description:
            'Grew from intern to senior engineer to leading a team of five, shipping client products like 247 Travels, McNif Cuisine and Bablo Homes.',
    },
    {
        period: 'May - Oct 2022',
        title: 'UI/UX designer',
        orgName: 'HillCross College, Johannesburg',
        description:
            "Designed the college's learning platform for students in Figma. It's a big part of why I still care how things look.",
    },
];

export const TOOLKIT_INTRO: string =
    'The same threads keep showing up across these products. Here they are, with where each one got used.';

export const TOOLKIT: ToolkitEntry[] = [
    {
        title: 'Product frontends',
        description: 'Fast, accessible web apps with a real design system underneath, not a pile of one-off screens.',
        tools: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'TanStack Query', 'PWA'],
        usedIn: 'Used in CashDrive, Ticketsdeck, ChequeIn, PlugIQ',
    },
    {
        title: 'APIs and data',
        description: 'Modular backends with clear boundaries, queues for slow work and sockets for live updates.',
        tools: ['NestJS', 'FastAPI', 'Express', 'Prisma', 'PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'BullMQ'],
        usedIn: 'Used in Ticketsdeck, Oneflare, Mirratal, Owaambe, BiSi Connect',
    },
    {
        title: 'Money movement',
        description: 'Checkouts, ledgers, webhooks, reconciliation, escrow and payouts that hold up when something goes wrong.',
        tools: ['Paystack', 'Flutterwave', 'direct debit', 'double-entry ledgers'],
        usedIn: 'Used in Ticketsdeck, Owaambe, Baoja, Mirratal, CashDrive',
    },
    {
        title: 'Identity and trust',
        description: 'KYC, two-factor sign-in, role-based access, audit logs and security reviews that end in fixes.',
        tools: ['KYC and liveness checks', 'TOTP', 'RBAC', 'audit logs'],
        usedIn: 'Used in CashDrive, ChequeIn, Mirratal, Oneflare',
    },
    {
        title: 'AI inside the product',
        description: 'Features where AI does real work: voice interviews, tool-calling assistants, scoring and document checks.',
        tools: ['OpenAI Realtime', 'Anthropic', 'Vercel AI SDK', 'Pipecat'],
        usedIn: 'Used in Mirratal, Ticketsdeck, ChequeIn, PlugIQ',
    },
    {
        title: 'Mobile',
        description: 'Cross-platform apps built with Expo and shipped to the App Store and Google Play.',
        tools: ['React Native', 'Expo', 'EAS', 'push', 'camera', 'maps'],
        usedIn: 'Used in Stylist Piazza, Godofreda',
    },
    {
        title: 'Shipping and running',
        description: "Containers, CI/CD, product analytics and error tracking, so I can see what's happening once it's live.",
        tools: ['Docker', 'GitHub Actions', 'Coolify', 'Fly.io', 'PostHog', 'Sentry'],
        usedIn: 'Used in Ticketsdeck, Mirratal, ChequeIn, CashDrive',
    },
    {
        title: 'Design',
        description: "I started as a UI/UX designer, so I build from Figma faithfully and can design when there's no designer in the room.",
        tools: ['Figma', 'FigJam', 'GSAP motion'],
        usedIn: 'Used at HillCross College, on Behance, in HyperFrames',
    },
];
