import { EssaySlug, type Essay } from '@/app/types/v2';

const READ_TIME: string = '2 min';

const COMMERCE: string = 'Commerce';

const LEADERSHIP: string = 'Leadership';

const WORST_DAY: Essay = {
    slug: EssaySlug.WorstDay,
    kicker: COMMERCE,
    title: 'A payment system is only as good as its worst day',
    summary: "Why reliability is a product decision before it's an engineering one.",
    readTime: READ_TIME,
    blocks: [
        { text: "Nobody remembers the thousand payments that went through. They remember the one that didn't." },
        {
            text: "That's the uncomfortable part of building systems that move money or goods. Your reputation isn't set by the average day. It's set by the day a payout runs late, a transfer shows as successful on one side and pending on the other, or a customer has to send three messages to find out where their money is.",
        },
        {
            text: "I've worked on ledgers and payouts in lending, ticketing and trade, and the lesson has been the same each time. Reliability is a product decision before it's an engineering one. You decide up front that every naira has a record, that every record can be traced, and that nobody moves money without a second pair of eyes. Then you build the product around those rules, so you're not bolting them on after the first incident.",
        },
        { text: 'Three habits have served my teams well.' },
        {
            lead: 'Write everything down.',
            text: "When a ledger records every movement, a bad day means reading a history. Without one, you're guessing.",
        },
        {
            lead: 'Assume things will fail.',
            text: 'Banks time out. Networks drop. A good system expects this, retries safely and never pays twice.',
        },
        {
            lead: 'Tell people first.',
            text: 'A customer who hears from you before they notice a delay will usually stay. One who finds out on their own rarely does.',
        },
        {
            text: 'Trust in commerce is built slowly and spent quickly. The businesses that win here will be the ones whose systems keep their promises on the hard days.',
        },
    ],
};

const START_BY_HAND: Essay = {
    slug: EssaySlug.StartByHand,
    kicker: COMMERCE,
    title: 'Start by hand, then let the system take over',
    summary: 'Where automation beats manual work, and when to wait.',
    readTime: READ_TIME,
    blocks: [
        {
            text: 'Manual processes feel safe. Someone checks the spreadsheet, someone approves the payment, someone sends the confirmation. It works until volume arrives.',
        },
        {
            text: 'At ten transactions a day, a person is the best system you have. At a thousand, that same person is your biggest risk. They get tired, they go on leave, and their mistakes are different every time, which makes them hard to spot.',
        },
        {
            text: "A system makes the same decision the same way at two in the afternoon and two in the morning. It leaves a record, and it doesn't slow down as you grow. Speed is part of the case for automation. The bigger wins are consistency, evidence and room to grow without hiring someone for every hundred new customers.",
        },
        { text: "Even so, I don't think you should automate on day one." },
        {
            text: "When a process is new, you don't understand it yet. You don't know which steps matter, where customers get confused, or which exceptions turn up every week. Doing it by hand for a while is the cheapest research you'll ever run. You learn the real shape of the work, and you find out whether anyone wants the thing before you spend months building it.",
        },
        {
            lead: 'Do it by hand until it hurts and the steps stop changing.',
            text: "That's the rule I use. Then automate exactly what you've been doing, and keep people for the judgment calls.",
        },
        {
            text: 'Automate too early and you lock in guesses. Automate too late and your team drowns in work a machine should be doing. Getting that timing right is one of the most valuable calls a leader makes.',
        },
    ],
};

const SMALLEST_PART: Essay = {
    slug: EssaySlug.SmallestPart,
    kicker: 'Culture',
    title: 'A ticket is the smallest part of an experience',
    summary: 'Where the value sits for organisers.',
    readTime: READ_TIME,
    blocks: [
        {
            text: 'When we started Ticketsdeck, we thought we were building a ticketing system. Sell the ticket, scan the ticket, pay the organiser. It took a while to see how small that picture was.',
        },
        {
            text: "For the person attending, the ticket is a receipt. What they're buying is the night itself: who they'll go with, what they'll wear, the photos they'll post, the story they'll tell on Monday. The experience starts the moment they hear about the event, and it carries on long after the doors close.",
        },
        {
            text: "For the organiser, the ticket is one line in a much longer list. They need to find an audience, price fairly, manage vendors, know who's coming, get paid on time and bring the same people back next time. Most of them do this with a patchwork of chats, spreadsheets and bank alerts.",
        },
        {
            text: 'Once we saw that, the question changed. We stopped asking how to sell more tickets. We started asking what it takes to run an experience well, and to make a living doing it.',
        },
        {
            text: "That's why we now describe Ticketsdeck as a platform for building experiences. The sale still matters, but it's the starting point. The value sits in everything around it: helping organisers understand their audience, getting their money to them quickly, and giving creators a way to earn from the communities they've built.",
        },
        {
            text: "Nigeria has no shortage of people who can fill a room. What they've lacked are tools that treat what they do as a real business. Build for the whole experience and the ticket takes care of itself.",
        },
    ],
};

const TEAM_OF_SIX: Essay = {
    slug: EssaySlug.TeamOfSix,
    kicker: LEADERSHIP,
    title: "What a team of six can ship that a team of sixty can't",
    summary: 'Ownership, and what it costs to lose it.',
    readTime: READ_TIME,
    blocks: [
        {
            text: "Every product I've led or collaborated on was built by a team of four to ten people, sometimes fewer, sometimes more. For a long time I saw that as a constraint. Now I think it's the advantage.",
        },
        {
            text: "In a team of six, everybody knows what everybody else is working on. A decision takes one conversation. When something breaks, the person who can fix it already knows about it. There's nowhere to hide and nobody to hand the problem to, so people own things fully.",
        },
        {
            text: 'A team of sixty can do more things at once, but it pays for that in coordination. Work has to be planned, handed over, reviewed and aligned. Every handover loses a little context, and a lot of energy goes into keeping people in step when it could be moving the product forward.',
        },
        {
            text: "Small teams aren't better at everything. They can't run ten big projects at once, and they feel it badly when one person leaves. That's why how you build the team matters more than its size. A few things I hold to:",
        },
        {
            lead: 'Hire for ownership before skill.',
            text: 'Skills can be taught. Caring about the outcome is much harder to teach.',
        },
        { lead: 'Give people whole problems.', text: '"Reduce failed payouts" gets better work than a list of tickets.' },
        { lead: 'Say no often.', text: 'A small team wins by doing a few things properly.' },
        { lead: 'Automate the repeat work.', text: 'People should spend their time on judgment.' },
        {
            text: "With clear ownership and a short list, a small team ships faster than organisations ten times its size, and the people in it grow faster too. Some of the best people I've mentored learnt to lead on teams like that.",
        },
    ],
};

const CHARACTER: Essay = {
    slug: EssaySlug.Character,
    kicker: LEADERSHIP,
    title: 'Character comes before competence',
    summary: 'What I look out for in leaders, and why.',
    readTime: READ_TIME,
    blocks: [
        {
            text: 'When I decide who to hire, promote or partner with, I look at character first. Competence comes second.',
        },
        {
            text: "That can sound soft, so here's what I mean. Competence is what someone can do. Character is what they do when it's hard, when nobody is checking, or when the honest answer costs them something. You can teach the first in months. The second takes a lifetime to build, and you rarely get to change it in someone else.",
        },
        {
            text: "I've seen what each one does to a team. A highly skilled person you can't trust slows everybody down, because every piece of work needs checking and every promise needs a backup plan. A person of good character who's still learning gets better every month, and so do the people around them.",
        },
        { text: "Here's what I look out for." },
        { lead: "Do they tell the truth when it's inconvenient?", text: 'Especially about their own mistakes.' },
        {
            lead: 'Do they keep small promises?',
            text: 'People who are careless with small things are careless with big ones.',
        },
        {
            lead: 'How do they treat people who can do nothing for them?',
            text: "That's the clearest view you'll get.",
        },
        { lead: 'Do they take responsibility?', text: 'Or do they look for someone to blame?' },
        {
            lead: 'Are they the same person under pressure?',
            text: "Pressure doesn't change people much. It shows you who was there all along.",
        },
        {
            text: "This is my own story too. I didn't get here by being the most gifted person in the room. Doors opened because people could rely on me. I did what I said I'd do, I owned what went wrong, and I stayed when things got hard. Trust kept handing me bigger problems, and the skill grew to meet them.",
        },
        {
            text: "So it's now the measure I use when I make judgment calls about people. Skill still matters, and I won't hire someone who can't do the job. But between two people, I'll take the one I can trust and help them grow.",
        },
        { text: 'Competence gets you into the room. Character decides how long you stay.' },
    ],
};

export const ESSAYS: Essay[] = [WORST_DAY, START_BY_HAND, SMALLEST_PART, TEAM_OF_SIX, CHARACTER];
