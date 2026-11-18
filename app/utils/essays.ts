import { ESSAYS } from '@/app/constants/v2/essays';
import { RoutePath, type Essay, type EssaySlug } from '@/app/types/v2';

export function findEssay(slug: string): Essay | undefined {
    return ESSAYS.find((essay) => essay.slug === slug);
}

export function essaysFor(slugs: EssaySlug[]): Essay[] {
    return ESSAYS.filter((essay) => slugs.includes(essay.slug));
}

export function essayHref(slug: EssaySlug): string {
    return `${RoutePath.Thinking}/${slug}`;
}

/** The essay after this one, wrapping to the first, so every essay leads somewhere. */
export function nextEssay(slug: EssaySlug): Essay {
    const index = ESSAYS.findIndex((essay) => essay.slug === slug);
    return ESSAYS[(index + 1) % ESSAYS.length];
}
