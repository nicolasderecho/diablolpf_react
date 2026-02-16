import React from 'react';
import { cn } from '../../lib/cn';

const FilterLabel = ({ className, children, ...props }) => (
  <label
    className={cn('block text-white text-sm font-medium mb-1', className)}
    {...props}
  >
    {children}
  </label>
);

export default FilterLabel;
