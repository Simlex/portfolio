import React from 'react';
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

export default function Home(): React.ReactElement {
    return (
        <>
            <SiteHeader />
            <main>
                <Hero />
                <ShipLog />
                <SelectedWork />
                <AlsoBuilt />
                <ProjectIndex />
                <RolesSection />
                <Toolkit />
                <Contact />
            </main>
            <SiteFooter />
            <MobileTabBar />
        </>
    );
}
