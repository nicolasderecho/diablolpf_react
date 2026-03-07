import type { ReactNode } from 'react';
import EmptyResults from './EmptyResults';

type DiabloTableProps<T> = {
  items: T[];
  headers: string[];
  renderRow: (item: T, index: number) => ReactNode;
  className?: string;
};

const DiabloTable = <T,>({
  items,
  headers,
  renderRow,
  className,
}: DiabloTableProps<T>) => {
  if (items.length === 0) {
    return <EmptyResults />;
  }

  const tableClasses = `diablo-table w-full border border-gray-600 ${(className || '').trim()}`.trim();

  return (
    <>
      <div className="m-4">
        <span className="text-white text-xl font-semibold">
          {items.length} {items.length > 1 ? 'Resultados' : 'Resultado'}
        </span>
      </div>
      <div className="px-2 md:px-4 overflow-x-auto min-w-0" style={{ WebkitOverflowScrolling: 'touch' }}>
        <table className={`${tableClasses} min-w-[640px]`}>
          <thead>
            <tr className="bg-gray-900 text-white">
              {headers.map((header, key) => (
                <th
                  key={key}
                  className="diablo-table-item table-cell text-center"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>{items.map(renderRow)}</tbody>
        </table>
      </div>
    </>
  );
};

export default DiabloTable;
