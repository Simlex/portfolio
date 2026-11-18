import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';
import { HERO_FACTS, HOME_HERO, PROFILE_EYEBROW, PROFILE_NAME } from '@/app/constants/v2/profile';

export const alt: string = `${PROFILE_NAME} - ${PROFILE_EYEBROW}`;

export const size: { width: number; height: number } = { width: 1200, height: 630 };

export const contentType: string = 'image/png';

/* The light theme from tokens.css. The headshot sits on white, so the light page lets it bleed in. */
const BG: string = '#F3F5F9';
const BG_CLEAR: string = 'rgba(243, 245, 249, 0)';
const INK: string = '#0A192F';
const INK_2: string = '#3F4D69';
const LINE: string = '#D8DEE9';
const ACCENT: string = '#D13A18';
const ACCENT_INK: string = '#B5310F';

const DISPLAY: string = 'Archivo Expanded';
const BODY: string = 'Archivo';
const MONO: string = 'JetBrains Mono';

const PHOTO_SIZE: number = 630;
const PHOTO_RIGHT: number = -44;
const PHOTO_FADE: number = 230;

/* Wider than the text column, so the accent line stays whole and runs over the faded edge of the photo. */
const STATEMENT_WIDTH: number = 640;
const HEADSHOT_PATH: string = 'public/images/v2/headshot.jpg';
const FONT_DIR: string = 'app/fonts/og';

type OgFont = { name: string; data: Buffer; weight: 500 | 800; style: 'normal' };

function fromRoot(path: string): string {
    return join(process.cwd(), path);
}

async function loadFonts(): Promise<OgFont[]> {
    const [display, body, mono]: Buffer[] = await Promise.all([
        readFile(fromRoot(`${FONT_DIR}/Archivo-Expanded-ExtraBold.ttf`)),
        readFile(fromRoot(`${FONT_DIR}/Archivo-Medium.ttf`)),
        readFile(fromRoot(`${FONT_DIR}/JetBrainsMono-Medium.ttf`)),
    ]);
    return [
        { name: DISPLAY, data: display, weight: 800, style: 'normal' },
        { name: BODY, data: body, weight: 500, style: 'normal' },
        { name: MONO, data: mono, weight: 500, style: 'normal' },
    ];
}

async function loadHeadshot(): Promise<string> {
    const photo: Buffer = await readFile(fromRoot(HEADSHOT_PATH));
    return `data:image/jpeg;base64,${photo.toString('base64')}`;
}

function Portrait({ src }: Readonly<{ src: string }>): React.ReactElement {
    return (
        <div
            style={{
                position: 'absolute',
                top: 0,
                right: PHOTO_RIGHT,
                width: PHOTO_SIZE,
                height: PHOTO_SIZE,
                display: 'flex',
            }}
        >
            {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
            <img src={src} width={PHOTO_SIZE} height={PHOTO_SIZE} />
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: PHOTO_FADE,
                    height: PHOTO_SIZE,
                    background: `linear-gradient(90deg, ${BG} 0%, ${BG_CLEAR} 100%)`,
                }}
            />
        </div>
    );
}

function Facts(): React.ReactElement {
    return (
        <div style={{ display: 'flex', gap: 24, borderTop: `1px solid ${LINE}`, paddingTop: 22 }}>
            {HERO_FACTS.map((fact) => (
                <div key={fact.label} style={{ display: 'flex', flexDirection: 'column', gap: 4, width: 158 }}>
                    <div style={{ fontFamily: DISPLAY, fontWeight: 800, fontSize: 30, letterSpacing: -1 }}>
                        {fact.value}
                    </div>
                    <div style={{ fontSize: 16, lineHeight: 1.3, color: INK_2 }}>{fact.label}</div>
                </div>
            ))}
        </div>
    );
}

export default async function OpengraphImage(): Promise<ImageResponse> {
    const [fonts, headshot]: [OgFont[], string] = await Promise.all([loadFonts(), loadHeadshot()]);

    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    background: BG,
                    color: INK,
                    fontFamily: BODY,
                    fontWeight: 500,
                    position: 'relative',
                }}
            >
                <Portrait src={headshot} />

                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        width: 612,
                        height: '100%',
                        padding: '60px 0 56px 72px',
                    }}
                >
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                        <div style={{ fontFamily: DISPLAY, fontWeight: 800, fontSize: 28, letterSpacing: -0.6 }}>
                            {PROFILE_NAME}
                        </div>
                        <div style={{ fontFamily: MONO, fontSize: 17, color: ACCENT_INK }}>{PROFILE_EYEBROW}</div>
                    </div>

                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            fontFamily: DISPLAY,
                            fontWeight: 800,
                            fontSize: 52,
                            lineHeight: 1.02,
                            letterSpacing: -1.8,
                            width: STATEMENT_WIDTH,
                        }}
                    >
                        <div style={{ display: 'flex' }}>{HOME_HERO.statementLead}</div>
                        {HOME_HERO.statementPhrases.slice(0, 1).map((phrase) => (
                            <div key={phrase} style={{ display: 'flex', color: ACCENT }}>
                                {phrase}
                            </div>
                        ))}
                    </div>

                    <Facts />
                </div>
            </div>
        ),
        { ...size, fonts },
    );
}
