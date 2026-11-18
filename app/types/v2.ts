import type { StaticImageData } from 'next/image';

export enum SectionId {
    Top = 'top',
    Themes = 'themes',
    Books = 'books',
    ShipLog = 'shiplog',
    Work = 'work',
    More = 'more',
    Index = 'index',
    Roles = 'roles',
    Toolkit = 'toolkit',
    Contact = 'contact',
}

export enum RoutePath {
    Home = '/',
    Dev = '/dev',
    Thinking = '/thinking',
}

export enum EssaySlug {
    WorstDay = 'a-payment-system-is-only-as-good-as-its-worst-day',
    StartByHand = 'start-by-hand-then-let-the-system-take-over',
    SmallestPart = 'a-ticket-is-the-smallest-part-of-an-experience',
    TeamOfSix = 'what-a-team-of-six-can-ship',
    Character = 'character-comes-before-competence',
}

export enum ProjectCategory {
    Fintech = 'fintech',
    Events = 'events',
    Commerce = 'commerce',
    HrAndHiring = 'hr',
    Ai = 'ai',
    Place = 'place',
    Tools = 'tools',
}

export enum ShipLogSort {
    Start = 'start',
    Volume = 'volume',
}

export enum IconName {
    Github = 'github',
    LinkedIn = 'linkedin',
    X = 'x',
    Behance = 'behance',
}

/** Variant names shared by the hero's framer-motion transitions. */
export enum MotionState {
    Hidden = 'hidden',
    Shown = 'shown',
    Gone = 'gone',
}

export enum TabIconName {
    Home = 'home',
    Themes = 'themes',
    Books = 'books',
    Engineering = 'engineering',
    ShipLog = 'shiplog',
    Work = 'work',
    Roles = 'roles',
    Contact = 'contact',
}

export interface SiteLink {
    label: string;
    href: string;
}

export interface SocialLink extends SiteLink {
    icon: IconName;
}

export interface ContactLink extends SiteLink {
    value: string;
}

export interface HeroFact {
    value: string;
    label: string;
}

export interface CaseStudy {
    id: string;
    name: string;
    kicker: string;
    pitch: string;
    highlights: string[];
    stack: string[];
    stats: string[];
    image: StaticImageData;
    imageAlt: string;
    frameLabel: string;
    link?: SiteLink;
}

export interface ModuleLine {
    name: string;
    detail: string;
}

export interface ProjectCardEntry {
    id: string;
    name: string;
    kicker: string;
    description: string;
    stack: string[];
    stats: string[];
    image?: StaticImageData;
    imageAlt?: string;
    modules?: ModuleLine[];
    modulesCaption?: string;
    link?: SiteLink;
}

export interface ProjectEntry {
    id: string;
    name: string;
    summary: string;
    detail: string;
    part: string;
    years: string;
    categories: ProjectCategory[];
    href?: string;
    isExternal?: boolean;
}

export interface RoleEntry {
    period: string;
    title: string;
    orgName?: string;
    orgHref?: string;
    description: string;
}

export interface ToolkitEntry {
    title: string;
    description: string;
    tools: string[];
    usedIn: string;
}

export interface ShipLogRow {
    name: string;
    href: string;
    first: number;
    total: number;
    counts: number[];
}

export interface ShipLogData {
    months: string[];
    rows: ShipLogRow[];
}

export interface Figure {
    prefix: string;
    target: number;
    suffix: string;
}

export interface YearGroup {
    year: string;
    span: number;
}

export interface TooltipState {
    text: string;
    x: number;
    y: number;
}

export interface NavItem {
    id: SectionId;
    label: string;
}

/** A tab either scrolls to a section on this page or opens another route. */
export interface TabItem {
    label: string;
    icon: TabIconName;
    id?: SectionId;
    route?: RoutePath;
}

/** The sections a page watches for scroll position, and the tab each one lights up. */
export type SectionTabMap = Partial<Record<SectionId, SectionId>>;

export interface HeroCta extends SiteLink {
    isGhost?: boolean;
}

export interface HeroContent {
    statementLead: string;
    statementPhrases: string[];
    summary: string;
    ctas: HeroCta[];
    facts: HeroFact[];
}

export interface ContactCopy {
    heading: string;
    body: string;
}

export interface ThemeProof {
    source: string;
    title: string;
    detail: string;
    figure: string;
}

export interface ThemeChapter {
    id: string;
    kicker: string;
    title: string;
    thesis: string;
    proof: ThemeProof;
    essays: EssaySlug[];
}

/** One paragraph of an essay. A lead is the bold opening phrase of a point. */
export interface EssayBlock {
    text: string;
    lead?: string;
}

export interface Essay {
    slug: EssaySlug;
    kicker: string;
    title: string;
    summary: string;
    readTime: string;
    blocks: EssayBlock[];
}

export interface Book {
    title: string;
    author: string;
    isCurrent?: boolean;
}
