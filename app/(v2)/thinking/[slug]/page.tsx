import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import SiteFooter from '@/app/components/v2/contact/SiteFooter';
import EssayArticle from '@/app/components/v2/essay/EssayArticle';
import SiteHeader from '@/app/components/v2/header/SiteHeader';
import { ESSAYS } from '@/app/constants/v2/essays';
import { PROFILE_NAME } from '@/app/constants/v2/profile';
import { ESSAY_ROUTE_LINK } from '@/app/constants/v2/sections';
import { RoutePath } from '@/app/types/v2';
import { findEssay } from '@/app/utils/essays';

interface EssayPageProps {
    params: { slug: string };
}

export const dynamicParams: boolean = false;

export function generateStaticParams(): { slug: string }[] {
    return ESSAYS.map((essay) => ({ slug: essay.slug }));
}

export function generateMetadata({ params }: EssayPageProps): Metadata {
    const essay = findEssay(params.slug);
    if (!essay) {
        return {};
    }
    const title: string = `${essay.title} | ${PROFILE_NAME}`;
    return {
        title,
        description: essay.summary,
        openGraph: { type: 'article', title, description: essay.summary },
        twitter: { title, description: essay.summary },
    };
}

export default function EssayPage({ params }: Readonly<EssayPageProps>): React.ReactElement {
    const essay = findEssay(params.slug);
    if (!essay) {
        notFound();
    }

    return (
        <>
            <SiteHeader brandHref={RoutePath.Home} items={[]} routeLink={ESSAY_ROUTE_LINK} />
            <main>
                <EssayArticle essay={essay} />
            </main>
            <SiteFooter />
        </>
    );
}
