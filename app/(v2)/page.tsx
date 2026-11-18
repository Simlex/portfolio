import React from 'react';
import BooksAndNumbers from '@/app/components/v2/books/BooksAndNumbers';
import Contact from '@/app/components/v2/contact/Contact';
import SiteFooter from '@/app/components/v2/contact/SiteFooter';
import SiteHeader from '@/app/components/v2/header/SiteHeader';
import Hero from '@/app/components/v2/hero/Hero';
import MobileTabBar from '@/app/components/v2/nav/MobileTabBar';
import ThemeChapters from '@/app/components/v2/themes/ThemeChapters';
import { HOME_CONTACT, HOME_HERO } from '@/app/constants/v2/profile';
import { HOME_NAV_ITEMS, HOME_ROUTE_LINK, HOME_SECTION_TAB, HOME_TAB_ITEMS } from '@/app/constants/v2/sections';
import { SectionId } from '@/app/types/v2';

export default function Home(): React.ReactElement {
    return (
        <>
            <SiteHeader brandHref={`#${SectionId.Top}`} items={HOME_NAV_ITEMS} routeLink={HOME_ROUTE_LINK} />
            <main>
                <Hero content={HOME_HERO} />
                <ThemeChapters />
                <BooksAndNumbers />
                <Contact copy={HOME_CONTACT} />
            </main>
            <SiteFooter />
            <MobileTabBar tabs={HOME_TAB_ITEMS} sectionTab={HOME_SECTION_TAB} />
        </>
    );
}
