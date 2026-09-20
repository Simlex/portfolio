'use client';

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { SHIP_LOG, SHIP_LOG_REPO_COUNT } from '@/app/constants/v2/shipLog';
import { SectionId, ShipLogSort, type TooltipState } from '@/app/types/v2';
import { commitLabel, groupYears, monthInitial, monthLabel, sortRows, yearLabel } from '@/app/utils/shipLog';
import SectionHead from '../shared/SectionHead';
import ShipLogRows from './ShipLogRows';

const SHIP_LOG_INTRO: string =
    'Each square is a month. The darker it is, the more I committed to that product that month. Think of it as the honest version of a CV: what I was actually building, and when.';

const SORT_LABELS: Record<ShipLogSort, string> = {
    [ShipLogSort.Start]: 'By start date',
    [ShipLogSort.Volume]: 'By volume',
};

const HEAT_LEVELS: number[] = [0, 1, 2, 3, 4, 5];

export default function ShipLog(): React.ReactElement {
    const [sort, setSort] = useState<ShipLogSort>(ShipLogSort.Start);
    const [isAnimated, setIsAnimated] = useState<boolean>(true);
    const [tooltip, setTooltip] = useState<TooltipState | null>(null);

    const rows = useMemo(() => sortRows(SHIP_LOG.rows, sort), [sort]);
    const years = useMemo(() => groupYears(SHIP_LOG.months), []);

    const handleSort = (next: ShipLogSort): void => {
        setIsAnimated(false);
        setSort(next);
    };

    const handlePointerOver = useCallback((event: React.PointerEvent<HTMLTableElement>): void => {
        const cell = (event.target as HTMLElement).closest('td.c');
        if (!(cell instanceof HTMLTableCellElement)) {
            setTooltip(null);
            return;
        }
        const month = SHIP_LOG.months[Number(cell.dataset.month)];
        const count = Number(cell.dataset.count);
        const box = cell.getBoundingClientRect();
        setTooltip({
            text: `${cell.dataset.name} · ${monthLabel(month)} · ${commitLabel(count)}`,
            x: box.left + box.width / 2,
            y: box.top,
        });
    }, []);

    useEffect(() => {
        if (!tooltip) {
            return;
        }
        const hide = (): void => setTooltip(null);
        window.addEventListener('scroll', hide, { passive: true });
        return () => window.removeEventListener('scroll', hide);
    }, [tooltip]);

    return (
        <section className="shiplog sec" id={SectionId.ShipLog} aria-labelledby="shiplog-heading">
            <div className="wrap">
                <SectionHead id="shiplog" title="Ship log" description={SHIP_LOG_INTRO} />

                <div className="log-bar">
                    <div className="seg" role="group" aria-label="Sort products">
                        {Object.values(ShipLogSort).map((value) => (
                            <button key={value} type="button" aria-pressed={sort === value} onClick={() => handleSort(value)}>
                                {SORT_LABELS[value]}
                            </button>
                        ))}
                    </div>
                    <div className="legend mono" aria-hidden="true">
                        Less
                        {HEAT_LEVELS.map((level) => (
                            <i key={level} className={`l${level}`} />
                        ))}
                        More
                    </div>
                </div>

                <div className="log-scroll">
                    <table className={`log${isAnimated ? ' anim' : ''}`} onPointerOver={handlePointerOver} onPointerLeave={() => setTooltip(null)}>
                        <caption className="sr">
                            Commits I authored per month for each product, December 2023 to September 2026
                        </caption>
                        <colgroup>
                            <col className="c-name" />
                            {SHIP_LOG.months.map((month) => (
                                <col key={month} />
                            ))}
                            <col className="c-tot" />
                        </colgroup>
                        <thead>
                            <tr>
                                <th scope="col">
                                    <span className="sr">Product</span>
                                </th>
                                {years.map((group) => (
                                    <th key={group.year} className="yr" scope="colgroup" colSpan={group.span}>
                                        {yearLabel(group)}
                                    </th>
                                ))}
                                <th className="tot-h" scope="col">
                                    Total
                                </th>
                            </tr>
                            <tr>
                                <td />
                                {SHIP_LOG.months.map((month) => (
                                    <th key={month} className="mo" scope="col" abbr={monthLabel(month)}>
                                        {monthInitial(month)}
                                    </th>
                                ))}
                                <td />
                            </tr>
                        </thead>
                        <ShipLogRows rows={rows} />
                    </table>
                </div>

                <p className="log-note">
                    Showing a selection of products, counted from git history across {SHIP_LOG_REPO_COUNT} repositories,
                    merges included. Client work from my Xown Solutions years (2022 to 2025) lives in their repositories, so
                    it isn&apos;t shown here.
                </p>
            </div>

            {tooltip ? (
                <div className="tip" role="status" style={{ left: tooltip.x, top: tooltip.y }}>
                    {tooltip.text}
                </div>
            ) : null}
        </section>
    );
}
