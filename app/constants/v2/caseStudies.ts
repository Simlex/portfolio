import cashdrive from '@/public/images/v2/cashdrive.jpg';
import chequein from '@/public/images/v2/chequein.jpg';
import mirratal from '@/public/images/v2/mirratal.jpg';
import owaambe from '@/public/images/v2/owaambe.jpg';
import plugiq from '@/public/images/v2/plugiq.jpg';
import ticketsdeck from '@/public/images/v2/ticketsdeck.jpg';
import type { CaseStudy } from '@/app/types/v2';

export const SELECTED_WORK_INTRO: string =
    "Six products where I owned the most or went the deepest. For each one I've set out what it does, what I did, and what it runs on.";

export const CASE_STUDIES: CaseStudy[] = [
    {
        id: 'ticketsdeck',
        name: 'Ticketsdeck Events',
        kicker: 'Events · Founder and CTO · Dec 2023 - now',
        pitch: 'Self-service ticketing for events in Nigeria. Organizers create an event, sell tiered tickets, check guests in at the door and get paid out. Attendees find something to do, buy in a few taps and share a personalized Pulse Card.',
        highlights: [
            'Wrote almost all of the web app and every commit of the NestJS API behind it: 44 modules, about 250 endpoints and 48 data models.',
            'Built Paystack checkout with signed webhooks, an hourly retry for failed orders, coupons, wallets and organizer payouts with admin approval.',
            'Rebuilt door check-in around staff codes, a phone-camera QR scanner and live attendance.',
            'Shipped Pulse Cards, shareable "I\'m attending" flyers that credit ticket sales back to whoever shared them.',
            'Built DeckPal, an AI assistant with 39 tools that can set up events, tickets and coupons, buy tickets and hand off to support.',
            'Run the platform too: an internal ops console, Docker builds, CI to Coolify and database backups.',
        ],
        stack: ['Next.js', 'React', 'TypeScript', 'NestJS', 'Prisma', 'MySQL', 'Socket.io', 'Paystack', 'OpenAI', 'Docker'],
        stats: ['4,000+ commits', '4 repos', '120+ events'],
        image: ticketsdeck,
        imageAlt: 'Ticketsdeck Events homepage with the event carousel and a countdown to the next event',
        frameLabel: 'events.ticketsdeck.com',
        link: { label: 'Visit events.ticketsdeck.com', href: 'https://events.ticketsdeck.com' },
    },
    {
        id: 'cashdrive',
        name: 'CashDrive',
        kicker: 'Fintech · Lead frontend engineer · Aug 2025 - now',
        pitch: 'Car-backed loans in Nigeria. Car owners borrow against their car, and dealers get credit lines and term loans to finance stock, with money paid out within 24 hours.',
        highlights: [
            'Own all three frontends: the borrower app, the back-office console and the marketing site. I bootstrapped two of them.',
            'Built the whole borrower journey: a multi-step application, identity checks, e-signed loan agreements, bank account verification and direct-debit mandates.',
            'Made repayments fit real life: early payoff quotes, part payments, transfers with receipt upload, wallet payments, rollovers and restructuring.',
            'Built dealer tools, from the credit line dashboard to term loans that run from offer to closeout.',
            'Gave the ops team a back-office with review and approval workflows, role-based access, audit trails and exports.',
        ],
        stack: ['Next.js', 'React 19', 'TypeScript', 'Tailwind', 'TanStack Query', 'NextAuth', 'Chart.js', 'GSAP', 'PostHog'],
        stats: ['2,900+ commits', '68 pages'],
        image: cashdrive,
        imageAlt: 'CashDrive homepage headline, Fast cash with your car, above a preview of the borrower dashboard',
        frameLabel: 'cashdrive.co',
        link: { label: 'Visit cashdrive.co', href: 'https://www.cashdrive.co' },
    },
    {
        id: 'mirratal',
        name: 'Mirratal',
        kicker: 'Hiring and AI · Sole engineer · Apr 2026 - now',
        pitch: 'AI hiring that looks past the CV. Candidates take a short voice interview with an AI interviewer, get scored against a rubric, and leave with a verified skill badge they can share.',
        highlights: [
            'Built all four codebases on my own: the NestJS API, a Python voice runtime, the employer and candidate web app, and a staff console.',
            "The AI interviewer joins the candidate's room, mixes set questions with live follow-ups and keeps to a time budget.",
            'Every interview gets scored against a rubric after the call, with integrity signals and a review queue for flagged sessions.',
            'Added an ATS layer: careers pages, CV parsing that sends strong applicants straight to interview, a pipeline board and scheduling.',
            'Billing runs on Paystack credits with a ledger. The staff console has 5 roles, 21 permissions and two-factor sign-in.',
        ],
        stack: ['NestJS', 'Prisma', 'PostgreSQL', 'BullMQ', 'Python', 'Pipecat', 'OpenAI Realtime', 'Anthropic', 'Next.js 16'],
        stats: ['312 commits', '4 repos', '46 data models'],
        image: mirratal,
        imageAlt: 'Mirratal logo on a brand cover with interview tag chips',
        frameLabel: 'mirratal · brand cover',
    },
    {
        id: 'chequein',
        name: 'ChequeIn by Trybesave',
        kicker: 'Fintech and HR · Frontend lead · Jun 2026 - now',
        pitch: "Attendance, payroll and earned wage access for African businesses with shift workers. Employers clock staff in and run payroll, and staff can draw pay they've already earned before payday.",
        highlights: [
            'Built the employer dashboard from Figma: sign-up and business verification, attendance with a configurable rules engine, payroll runs, wage advances, repayments, a wallet and team permissions.',
            'Built the product site, the company site and the staff console, including a tiered fee builder with a live preview.',
            'Led the port of the Laravel API to NestJS against the live database, with shared tokens so both could run side by side. About 35 modules, plus face liveness checks.',
            'Audited the platform for security issues and shipped the fixes.',
            'Started an AI assistant service on Claude that answers questions about a company’s own data.',
        ],
        stack: ['Next.js 16', 'React 19', 'TanStack Query', 'Recharts', 'PostHog', 'NestJS', 'Prisma', 'MySQL', 'Redis'],
        stats: ['517 commits', '7 repos'],
        image: chequein,
        imageAlt: 'ChequeIn homepage with the employer dashboard and mobile app previews',
        frameLabel: 'getchequein.com',
        link: { label: 'Visit getchequein.com', href: 'https://www.getchequein.com' },
    },
    {
        id: 'owaambe',
        name: 'Owaambe',
        kicker: 'Events · Sole engineer · Feb 2026 - now',
        pitch: 'Digital invitations for Nigerian celebrations. Hosts build an animated invitation, and guests RSVP, send money gifts, order Aso-ebi and get a QR pass for the door.',
        highlights: [
            'Built the web app, the FastAPI backend and the admin console on my own.',
            'Made an invitation builder with themes, galleries, music and a wax-seal envelope that opens on arrival. Drafts survive a refresh.',
            'Designed gift payments to be trusted with real money: a local record before Paystack is ever called, one idempotent settlement path, an append-only ledger and a scheduled reconciliation sweep.',
            'Shipped Aso-ebi ordering end to end, host payouts with fee breakdowns, CSV guest import and a camera QR check-in.',
        ],
        stack: ['Next.js 16', 'React 19', 'Tailwind', 'FastAPI', 'MongoDB', 'Paystack', 'Cloudinary', 'Resend'],
        stats: ['254 commits', '3 repos'],
        image: owaambe,
        imageAlt: 'Owaambe homepage, Create memorable celebrations that last forever, above event photos',
        frameLabel: 'owaambe.app',
        link: { label: 'Visit owaambe.app', href: 'https://owaambe.app' },
    },
    {
        id: 'plugiq',
        name: 'PlugIQ',
        kicker: 'B2B SaaS · Software engineer at DESCASIO · Jun 2025 - Aug 2026',
        pitch: 'A no-code platform where organizations build their own business apps: forms, approval workflows, dashboards and AI, without writing code.',
        highlights: [
            'Worked across a five-year-old codebase with more than 20,000 commits, on both the React frontend and the Node API.',
            'Rebuilt the form designer in the process builder with drag and drop across sections, undo and redo, and state moved into Redux Toolkit.',
            'Built the visibility rules that decide who sees what at each workflow step, plus input tables and a formula editor that flags broken references.',
            'Shipped document signing end to end, from builder setup to signing during a run to a signed file with its certificate.',
        ],
        stack: ['React 18', 'MUI', 'Redux Toolkit', 'React Flow', 'Node', 'Express', 'MongoDB', 'Redis'],
        stats: ['1,500+ commits', '2 repos'],
        image: plugiq,
        imageAlt: 'PlugIQ homepage, Your business approvals deserve better than emails',
        frameLabel: 'plugiq.io',
        link: { label: 'Visit plugiq.io', href: 'https://plugiq.io' },
    },
];
