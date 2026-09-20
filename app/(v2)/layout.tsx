import React from 'react';
import type { Metadata } from 'next';
import { Archivo, JetBrains_Mono } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import CustomCursor from '@/app/components/v2/cursor/CustomCursor';
import { PROFILE_NAME } from '@/app/constants/v2/profile';
import SmoothScroll from '@/app/components/v2/scroll/SmoothScroll';
import '@/app/components/v2/styles/tokens.css';
import '@/app/components/v2/styles/hero.css';
import '@/app/components/v2/styles/shiplog.css';
import '@/app/components/v2/styles/work.css';
import '@/app/components/v2/styles/projectIndex.css';
import '@/app/components/v2/styles/profile.css';
import '@/app/components/v2/styles/chrome.css';

const archivo = Archivo({ subsets: ['latin'], axes: ['wdth'], display: 'swap', variable: '--font-archivo' });

const jetBrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    weight: ['400', '500'],
    display: 'swap',
    variable: '--font-mono-face',
});

const SITE_DESCRIPTION: string =
    'Product engineer and founder. Web apps, mobile apps, APIs and design systems for fintech, events, hiring, hospitality and commerce.';

function siteUrl(): URL {
    const fromVercel: string | undefined = process.env.NEXT_PUBLIC_SITE_URL ?? process.env.VERCEL_PROJECT_PRODUCTION_URL;
    if (typeof fromVercel === 'string' && fromVercel.length > 0) {
        return new URL(fromVercel.startsWith('http') ? fromVercel : `https://${fromVercel}`);
    }
    return new URL('http://localhost:8292');
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
            <div className={`v2 ${archivo.variable} ${jetBrainsMono.variable}`}>
                <SmoothScroll />
                <CustomCursor />
                {children}
            </div>
        </ThemeProvider>
    );
}
