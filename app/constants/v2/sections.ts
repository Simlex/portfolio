import { RoutePath, SectionId, TabIconName, type NavItem, type SectionTabMap, type SiteLink, type TabItem } from '@/app/types/v2';

const CONTACT_LABEL: string = 'Contact';

export const HOME_NAV_ITEMS: NavItem[] = [
    { id: SectionId.Themes, label: 'Thinking' },
    { id: SectionId.Books, label: 'Books' },
    { id: SectionId.Contact, label: CONTACT_LABEL },
];

export const HOME_ROUTE_LINK: SiteLink = { label: '/dev', href: RoutePath.Dev };

export const HOME_TAB_ITEMS: TabItem[] = [
    { id: SectionId.Top, label: 'Home', icon: TabIconName.Home },
    { id: SectionId.Themes, label: 'Thinking', icon: TabIconName.Themes },
    { id: SectionId.Books, label: 'Books', icon: TabIconName.Books },
    { route: RoutePath.Dev, label: 'Dev', icon: TabIconName.Engineering },
    { id: SectionId.Contact, label: CONTACT_LABEL, icon: TabIconName.Contact },
];

export const HOME_SECTION_TAB: SectionTabMap = {
    [SectionId.Top]: SectionId.Top,
    [SectionId.Themes]: SectionId.Themes,
    [SectionId.Books]: SectionId.Books,
    [SectionId.Contact]: SectionId.Contact,
};

export const DEV_NAV_ITEMS: NavItem[] = [
    { id: SectionId.ShipLog, label: 'Ship log' },
    { id: SectionId.Work, label: 'Work' },
    { id: SectionId.Roles, label: 'Roles' },
    { id: SectionId.Contact, label: CONTACT_LABEL },
];

export const DEV_ROUTE_LINK: SiteLink = { label: 'Home', href: RoutePath.Home };

export const DEV_TAB_ITEMS: TabItem[] = [
    { route: RoutePath.Home, label: 'Home', icon: TabIconName.Home },
    { id: SectionId.ShipLog, label: 'Ship log', icon: TabIconName.ShipLog },
    { id: SectionId.Work, label: 'Work', icon: TabIconName.Work },
    { id: SectionId.Roles, label: 'Roles', icon: TabIconName.Roles },
    { id: SectionId.Contact, label: CONTACT_LABEL, icon: TabIconName.Contact },
];

export const DEV_SECTION_TAB: SectionTabMap = {
    [SectionId.ShipLog]: SectionId.ShipLog,
    [SectionId.Work]: SectionId.Work,
    [SectionId.More]: SectionId.Work,
    [SectionId.Index]: SectionId.Work,
    [SectionId.Roles]: SectionId.Roles,
    [SectionId.Toolkit]: SectionId.Roles,
    [SectionId.Contact]: SectionId.Contact,
};

/** Essay pages only need a way back, so their header carries no section links. */
export const ESSAY_ROUTE_LINK: SiteLink = { label: 'Home', href: RoutePath.Home };
