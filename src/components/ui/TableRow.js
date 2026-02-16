import React from 'react';
import { cn } from '../../lib/cn';

const TableRow = ({ className, children, ...props }) => (
  <tr
    className={cn('bg-black text-white hover:bg-green-600', className)}
    {...props}
  >
    {children}
  </tr>
);

export default TableRow;
