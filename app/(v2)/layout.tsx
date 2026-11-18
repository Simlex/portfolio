import React from 'react';
import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import CustomCursor from '@/app/components/v2/cursor/CustomCursor';
import { PROFILE_NAME } from '@/app/constants/v2/profile';
import { V2_FONT_VARIABLES } from '@/app/fonts/v2Fonts';
import SmoothScroll from '@/app/components/v2/scroll/SmoothScroll';
import '@/app/components/v2/styles/tokens.css';
import '@/app/components/v2/styles/hero.css';
import '@/app/components/v2/styles/shiplog.css';
import '@/app/components/v2/styles/work.css';
import '@/app/components/v2/styles/projectIndex.css';
import '@/app/components/v2/styles/profile.css';
import '@/app/components/v2/styles/leader.css';
import '@/app/components/v2/styles/chrome.css';

const SITE_DESCRIPTION: string =
    'Founder and CTO. I build companies and lead the teams behind them, and I write about trust in African commerce, the experience economy and small teams.';

/** Absolute URLs are baked in at build time, so this must never fall back to localhost: link previews resolve og:image against it. */
const PRODUCTION_URL: string = 'https://simlexltd.com';

function siteUrl(): URL {
    const configured: string | undefined = process.env.NEXT_PUBLIC_SITE_URL;
    if (typeof configured === 'string' && configured.length > 0) {
        return new URL(configured.startsWith('http') ? configured : `https://${configured}`);
    }
    return new URL(PRODUCTION_URL);
}

export const metadata: Metadata = {
    metadataBase: siteUrl(),
    title: PROFILE_NAME,
    description: SITE_DESCRIPTION,
    openGraph: {
        type: 'website',
        title: PROFILE_NAME,
        description: SITE_DESCRIPTION,
        siteName: PROFILE_NAME,
    },
    twitter: {
        card: 'summary_large_image',
        title: PROFILE_NAME,
        description: SITE_DESCRIPTION,
    },
};

export default function PortfolioLayout({ children }: Readonly<{ children: React.ReactNode }>): React.ReactElement {
    return (
        <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem disableTransitionOnChange>
            <div className={`v2 ${V2_FONT_VARIABLES}`}>
                <SmoothScroll />
                <CustomCursor />
                {children}
            </div>
        </ThemeProvider>
    );
}
