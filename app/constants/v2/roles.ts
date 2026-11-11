import type { RoleEntry, ToolkitEntry } from '@/app/types/v2';

export const ROLES_INTRO: string =
    'I started as a designer and grew into engineering. These days I lead the teams and make the technology calls that move the business.';

export const ROLES: RoleEntry[] = [
    {
        period: 'Dec 2023 - now',
        title: 'Founder and CTO',
        orgName: 'Ticketsdeck',
        orgHref: 'https://events.ticketsdeck.com',
        description:
            "I set the direction and lead the technology. We've grown Ticketsdeck from a ticketing site into a platform for building experiences: organizers create and run them, people relive and share them on web and mobile, and creators help them sell out.",
    },
    {
        period: 'Oct 2026 - now',
        title: 'Lead engineer',
        orgName: 'Aimpexx',
        orgHref: 'https://aimpexx.com',
        description:
            "I lead tech innovation at a business that sources and ships goods from China, using technology to drive growth across Nigeria and Ghana. We started with the operations console the whole business runs on.",
    },
    {
        period: 'Aug 2025 - now',
        title: 'Lead frontend engineer',
        orgName: 'CashDrive',
        orgHref: 'https://www.cashdrive.co',
        description:
            'I own frontend across all four apps: the borrower app, the back office, the marketing site and Onboard, the field app our sales team uses to sign up dealers.',
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
            'I partner with founders to take products from idea to launch: Mirratal, Owaambe, ChequeIn, Oneflare, Godofreda, Stylist Piazza, SabiBid, Orineum and more. Sometimes I lead a small team, sometimes I am the team.',
    },
    {
        period: 'May 2022 - Apr 2025',
        title: 'Intern to engineering team lead',
        orgName: 'Xown Solutions',
        orgHref: 'https://www.xownsolutions.com',
        description:
            'Grew from intern to senior engineer to leading a team of five. We shipped client products like 247 Travels, McNif Cuisine and Bablo Homes.',
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
        usedIn: 'Used in CashDrive, Ticketsdeck, Aimpexx, ChequeIn, PlugIQ',
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
        description: 'KYC, two-factor sign-in, role-based access, maker-checker approvals, audit logs and security reviews that end in fixes.',
        tools: ['KYC and liveness checks', 'TOTP', 'RBAC', 'maker-checker', 'audit logs'],
        usedIn: 'Used in CashDrive, Aimpexx, Ticketsdeck, ChequeIn, Mirratal',
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
        usedIn: 'Used in Ticketsdeck, Stylist Piazza, Godofreda',
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
        usedIn: 'Used at HillCross College, on Behance, for Ticketsdeck social, in HyperFrames',
    },
];
