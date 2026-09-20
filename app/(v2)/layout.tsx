import React from 'react';
import type { Metadata } from 'next';
import { Archivo, JetBrains_Mono } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import CustomCursor from '@/app/components/v2/cursor/CustomCursor';
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

export const metadata: Metadata = {
    title: 'Similoluwa Afolabi',
    description:
        'Product engineer and founder. Web apps, mobile apps, APIs and design systems for fintech, events, hiring, hospitality and commerce.',
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
