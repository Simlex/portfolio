import { ImageResponse } from 'next/og';
import { HERO_FACTS, PROFILE_EYEBROW, PROFILE_NAME } from '@/app/constants/v2/profile';

export const alt: string = `${PROFILE_NAME} - ${PROFILE_EYEBROW}`;

export const size: { width: number; height: number } = { width: 1200, height: 630 };

export const contentType: string = 'image/png';

const PANEL_BG: string = '#0A192F';
const PANEL_INK: string = '#E1E8FB';
const PANEL_INK_2: string = '#A9B5D3';
const PANEL_LINE: string = '#22385A';
const ACCENT: string = '#FF4C29';

export default function OpengraphImage(): ImageResponse {
    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    background: PANEL_BG,
                    color: PANEL_INK,
                    padding: '72px 80px',
                    position: 'relative',
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        top: -260,
                        right: -180,
                        width: 620,
                        height: 620,
                        borderRadius: 620,
                        background: 'radial-gradient(circle, rgba(255,76,41,0.28) 0%, rgba(255,76,41,0) 68%)',
                    }}
                />

                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                    <div style={{ width: 44, height: 6, borderRadius: 6, background: ACCENT }} />
                    <div
                        style={{
                            fontSize: 24,
                            letterSpacing: 4,
                            textTransform: 'uppercase',
                            color: PANEL_INK_2,
                        }}
                    >
                        Portfolio
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div
                        style={{
                            fontSize: 104,
                            fontWeight: 800,
                            letterSpacing: -3,
                            lineHeight: 1.04,
                        }}
                    >
                        {PROFILE_NAME}
                    </div>
                    <div
                        style={{
                            marginTop: 22,
                            fontSize: 33,
                            color: PANEL_INK_2,
                            lineHeight: 1.35,
                            maxWidth: 900,
                        }}
                    >
                        {PROFILE_EYEBROW}
                    </div>
                </div>

                <div
                    style={{
                        display: 'flex',
                        borderTop: `1px solid ${PANEL_LINE}`,
                        paddingTop: 30,
                        gap: 72,
                    }}
                >
                    {HERO_FACTS.map((fact) => (
                        <div key={fact.label} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                            <div style={{ fontSize: 46, fontWeight: 700, letterSpacing: -1.5 }}>{fact.value}</div>
                            <div style={{ fontSize: 22, color: PANEL_INK_2 }}>{fact.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        ),
        size,
    );
}
