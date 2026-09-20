import { SectionId, TabIconName, type NavItem, type TabItem } from '@/app/types/v2';

export const NAV_ITEMS: NavItem[] = [
    { id: SectionId.ShipLog, label: 'Ship log' },
    { id: SectionId.Work, label: 'Work' },
    { id: SectionId.Roles, label: 'Roles' },
    { id: SectionId.Contact, label: 'Contact' },
];

export const TAB_ITEMS: TabItem[] = [
    { id: SectionId.Top, label: 'Home', icon: TabIconName.Home },
    { id: SectionId.ShipLog, label: 'Ship log', icon: TabIconName.ShipLog },
    { id: SectionId.Work, label: 'Work', icon: TabIconName.Work },
    { id: SectionId.Roles, label: 'Roles', icon: TabIconName.Roles },
    { id: SectionId.Contact, label: 'Contact', icon: TabIconName.Contact },
];

/** Sections watched for scroll position, and the tab each one lights up. */
export const SECTION_TAB: Record<SectionId, SectionId> = {
    [SectionId.Top]: SectionId.Top,
    [SectionId.ShipLog]: SectionId.ShipLog,
    [SectionId.Work]: SectionId.Work,
    [SectionId.More]: SectionId.Work,
    [SectionId.Index]: SectionId.Work,
    [SectionId.Roles]: SectionId.Roles,
    [SectionId.Toolkit]: SectionId.Roles,
    [SectionId.Contact]: SectionId.Contact,
};

export const WATCHED_SECTIONS: SectionId[] = Object.keys(SECTION_TAB) as SectionId[];
