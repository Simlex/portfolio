import type { StaticImageData } from 'next/image';

export enum SectionId {
    Top = 'top',
    ShipLog = 'shiplog',
    Work = 'work',
    More = 'more',
    Index = 'index',
    Roles = 'roles',
    Toolkit = 'toolkit',
    Contact = 'contact',
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

export enum TabIconName {
    Home = 'home',
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

export interface TabItem extends NavItem {
    icon: TabIconName;
}
