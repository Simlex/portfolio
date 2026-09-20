import React from 'react';
import type { ShipLogRow } from '@/app/types/v2';
import { formatCount, heatLevel } from '@/app/utils/shipLog';

interface Props {
    rows: ShipLogRow[];
}

function ShipLogRows({ rows }: Props): React.ReactElement {
    return (
        <tbody>
            {rows.map((row) => (
                <tr key={row.name}>
                    <th className="row" scope="row">
                        <a href={row.href}>{row.name}</a>
                    </th>
                    {row.counts.map((count, index) => (
                        <td
                            key={index}
                            className={`c l${heatLevel(count)}`}
                            style={{ '--i': index } as React.CSSProperties}
                            data-month={index}
                            data-count={count}
                            data-name={row.name}
                        >
                            <span className="sr">{count}</span>
                        </td>
                    ))}
                    <td className="tot">{formatCount(row.total)}</td>
                </tr>
            ))}
        </tbody>
    );
}

export default React.memo(ShipLogRows);
