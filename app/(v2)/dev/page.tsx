import React from 'react';
import type { Metadata } from 'next';
import AlsoBuilt from '@/app/components/v2/alsoBuilt/AlsoBuilt';
import Contact from '@/app/components/v2/contact/Contact';
import SiteFooter from '@/app/components/v2/contact/SiteFooter';
import SiteHeader from '@/app/components/v2/header/SiteHeader';
import Hero from '@/app/components/v2/hero/Hero';
import MobileTabBar from '@/app/components/v2/nav/MobileTabBar';
import ProjectIndex from '@/app/components/v2/projectIndex/ProjectIndex';
import RolesSection from '@/app/components/v2/roles/RolesSection';
import ShipLog from '@/app/components/v2/shiplog/ShipLog';
import Toolkit from '@/app/components/v2/toolkit/Toolkit';
import SelectedWork from '@/app/components/v2/work/SelectedWork';
import { DEV_CONTACT, DEV_HERO, PROFILE_NAME } from '@/app/constants/v2/profile';
import { DEV_NAV_ITEMS, DEV_ROUTE_LINK, DEV_SECTION_TAB, DEV_TAB_ITEMS } from '@/app/constants/v2/sections';
import { RoutePath } from '@/app/types/v2';

const DEV_TITLE: string = `Engineering | ${PROFILE_NAME}`;

const DEV_DESCRIPTION: string =
    'The engineering record: the products, commits and teams behind my work in events, fintech, trade and logistics, hiring and commerce.';

export const metadata: Metadata = {
    title: DEV_TITLE,
    description: DEV_DESCRIPTION,
    openGraph: { title: DEV_TITLE, description: DEV_DESCRIPTION },
    twitter: { title: DEV_TITLE, description: DEV_DESCRIPTION },
};

export default function DevPage(): React.ReactElement {
    return (
        <>
            <SiteHeader brandHref={RoutePath.Home} items={DEV_NAV_ITEMS} routeLink={DEV_ROUTE_LINK} />
            <main>
                <Hero content={DEV_HERO} />
                <ShipLog />
                <SelectedWork />
                <AlsoBuilt />
                <ProjectIndex />
                <RolesSection />
                <Toolkit />
                <Contact copy={DEV_CONTACT} />
            </main>
            <SiteFooter />
            <MobileTabBar tabs={DEV_TAB_ITEMS} sectionTab={DEV_SECTION_TAB} />
        </>
    );
}
