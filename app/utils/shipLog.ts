import { ShipLogSort, type ShipLogRow, type YearGroup } from '@/app/types/v2';

const MONTH_NAMES: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/** Commit counts that move a month up to the next shade. */
const HEAT_THRESHOLDS: number[] = [10, 30, 80, 150];

/** A year label only fits above the grid when it spans at least this many months. */
const MIN_YEAR_SPAN: number = 3;

function monthIndex(month: string): number {
    return Number(month.slice(5)) - 1;
}

export function heatLevel(count: number): number {
    if (count === 0) {
        return 0;
    }
    return HEAT_THRESHOLDS.filter((threshold) => count >= threshold).length + 1;
}

export function monthLabel(month: string): string {
    return `${MONTH_NAMES[monthIndex(month)]} ${month.slice(0, 4)}`;
}

export function monthInitial(month: string): string {
    return MONTH_NAMES[monthIndex(month)].charAt(0);
}

export function groupYears(months: string[]): YearGroup[] {
    return months.reduce<YearGroup[]>((groups, month) => {
        const year = month.slice(0, 4);
        const current = groups.at(-1);
        if (current && current.year === year) {
            current.span += 1;
            return groups;
        }
        return [...groups, { year, span: 1 }];
    }, []);
}

export function yearLabel(group: YearGroup): string {
    return group.span >= MIN_YEAR_SPAN ? group.year : '';
}

export function sortRows(rows: ShipLogRow[], sort: ShipLogSort): ShipLogRow[] {
    if (sort === ShipLogSort.Volume) {
        return [...rows].sort((a, b) => b.total - a.total);
    }
    return [...rows].sort((a, b) => a.first - b.first || b.total - a.total);
}

export function formatCount(count: number): string {
    return count.toLocaleString('en-US');
}

export function commitLabel(count: number): string {
    if (count === 0) {
        return 'no commits';
    }
    return `${formatCount(count)} ${count === 1 ? 'commit' : 'commits'}`;
}
