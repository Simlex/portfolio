import React from 'react';
import { THEMES } from '@/app/constants/v2/themes';
import { SectionId } from '@/app/types/v2';
import ThemeChapterBlock from './ThemeChapterBlock';

export default function ThemeChapters(): React.ReactElement {
    return (
        <section className="wrap" id={SectionId.Themes} aria-label="What I think about">
            {THEMES.map((theme) => (
                <ThemeChapterBlock key={theme.id} theme={theme} />
            ))}
        </section>
    );
}
