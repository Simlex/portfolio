import godofreda from '@/public/images/v2/godofreda.jpg';
import mozara from '@/public/images/v2/mozara.jpg';
import stylistPiazza from '@/public/images/v2/stylist-piazza.jpg';
import type { ProjectCardEntry } from '@/app/types/v2';

export const ALSO_BUILT_INTRO: string =
    'Three more worth a closer look: a shopping app on both stores, a booking app I led, and a marketplace built for a client.';

export const ALSO_BUILT: ProjectCardEntry[] = [
    {
        id: 'godofreda',
        name: 'Godofreda',
        kicker: 'Commerce · Technical lead · Feb 2026 - now',
        description:
            "A shopping app where factories post short videos of what they make and buyers order direct. It's live on iOS and Android. I bootstrapped the Expo app and the NestJS API, merged most of the team's pull requests and built the factory verification pipeline on private storage.",
        stack: ['Expo', 'React Native', 'NestJS', 'MongoDB', 'Cloudflare R2'],
        stats: ['136 commits', '4 repos'],
        image: godofreda,
        imageAlt: 'Godofreda homepage, Shop straight from the people who make it, beside the mobile app',
        link: { label: 'Visit godofreda.com', href: 'https://godofreda.com' },
    },
    {
        id: 'stylist-piazza',
        name: 'Stylist Piazza',
        kicker: 'Beauty services · Lead mobile engineer · Jul - Nov 2024',
        description:
            'A two-sided booking app for stylists, barbers and makeup artists. I wrote 637 of its 696 commits in five months: bookings, a Paystack wallet, vendor KYC with selfies, real-time chat and push notifications.',
        stack: ['React Native', 'Expo', 'NativeWind', 'Socket.io', 'Paystack'],
        stats: ['637 commits', '49 screens'],
        image: stylistPiazza,
        imageAlt: 'Two phones showing the Stylist Piazza booking app',
    },
    /*
     * Oneflare HMS is hidden for now at the owner's request. The hospitality work it covers is still
     * credited in the hero copy, the project index and the ship log. Restore by uncommenting.
     *
     * {
     *     id: 'oneflare',
     *     name: 'Oneflare HMS',
     *     kicker: 'Hospitality · Lead backend engineer · Mar 2026 - now',
     *     description:
     *         'One multi-tenant NestJS backend behind a hotel management system, a maintenance app and two admin consoles. I set up the foundation, then built the reporting suite, real-time notifications, audit logging and a test that fails the build if any hotel route is not gated.',
     *     stack: ['NestJS', 'Prisma', 'MySQL', 'Redis', 'BullMQ', 'Socket.io', 'Docker'],
     *     stats: ['351 commits'],
     *     modulesCaption: 'Backend only. Modules I built:',
     *     modules: [
     *         { name: 'reports', detail: 'occupancy, sales, guests, rate advisor' },
     *         { name: 'notifications', detail: 'BullMQ worker, Socket.io on Redis' },
     *         { name: 'audit-log', detail: 'before and after diffs' },
     *         { name: 'housekeeping', detail: 'tied to check-in and check-out' },
     *         { name: 'rate-plans', detail: 'including time-of-day rates' },
     *         { name: 'auth', detail: 'geofenced login, session claims' },
     *     ],
     * },
     */
    {
        id: 'mozara',
        name: 'Mozara Autos',
        kicker: 'Commerce · Lead engineer · Apr - Sep 2026',
        description:
            'A marketplace for cars imported from China to Nigeria, run from Guangzhou and Lagos. I built the site and the admin for leads and stock, English and Chinese versions, and CI/CD to Coolify.',
        stack: ['Next.js 16', 'FastAPI', 'MongoDB', 'Cloudinary', 'Docker'],
        stats: ['37 commits', '2 repos'],
        image: mozara,
        imageAlt: 'Mozara Autos homepage, Find your perfect car',
        link: { label: 'Visit mozaraautos.com', href: 'https://mozaraautos.com' },
    },
];
