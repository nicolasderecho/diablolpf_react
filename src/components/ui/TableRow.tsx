import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '../../lib/cn';

type TableRowProps = ComponentPropsWithoutRef<'tr'>;

const TableRow = ({ className, children, ...props }: TableRowProps) => (
  <tr
    className={cn('bg-black text-white hover:bg-green-600', className)}
    {...props}
  >
    {children}
  </tr>
);

export default TableRow;
