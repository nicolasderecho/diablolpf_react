import { useState } from 'react';
import TableRow from '../components/ui/TableRow';
import { cn } from '../lib/cn';
import type { ActArea } from '../types';

function tcColor(tcNumber: number): string {
  if (tcNumber >= 60 && tcNumber <= 70) {
    return 'text-diablo-blue font-bold';
  }

  if (tcNumber > 70 && tcNumber < 85) {
    return 'text-diablo-orange font-bold';
  }

  if (tcNumber >= 85) {
    return 'text-diablo-yellow font-bold';
  }

  return '';
}

type ActAreasProps = {
  actData: ActArea[];
  title: string;
  className?: string;
  startOpened?: boolean;
};

const ActAreas = ({
  actData,
  title,
  className = '',
  startOpened = false,
}: ActAreasProps) => {
  const [isOpened, setIsOpened] = useState(startOpened);
  const classes = cn('collapsible-component mb-4', className);

  return (
    <div className={classes}>
      <button
        type="button"
        className="collapsible-trigger w-full flex justify-between items-center p-4 bg-gray-800 text-diablo-orange font-bold cursor-pointer text-left"
        onClick={() => setIsOpened(!isOpened)}
        aria-expanded={isOpened}
      >
        <span>{title}</span>
        <span>{isOpened ? '−' : '+'}</span>
      </button>
      <div
        className={cn(
          'collapsible-content overflow-hidden transition-[max-height] duration-150 ease-out',
          isOpened ? 'max-h-[2500px]' : 'max-h-0',
        )}
      >
        <table className="diablo-table w-full border border-gray-600">
          <thead>
            <tr className="bg-gray-900 text-white">
              <th className="diablo-table-item table-cell text-center">Area</th>
              <th className="diablo-table-item table-cell text-center">Normal</th>
              <th className="diablo-table-item table-cell text-center">Pesadilla</th>
              <th className="diablo-table-item table-cell text-center">Infierno</th>
            </tr>
          </thead>
          <tbody>
            {actData.map((row) => (
              <TableRow key={row.name + row.originalName}>
                <td className="diablo-table-item table-cell text-center">{row.name}</td>
                <td className={cn('diablo-table-item table-cell text-center', tcColor(row.normalTc))}>
                  {row.normalTc}
                </td>
                <td className={cn('diablo-table-item table-cell text-center', tcColor(row.nightmareTc))}>
                  {row.nightmareTc}
                </td>
                <td className={cn('diablo-table-item table-cell text-center', tcColor(row.hellTc))}>
                  {row.hellTc}
                </td>
              </TableRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActAreas;
