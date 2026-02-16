import React from 'react';
import { cn } from '../../lib/cn';

const FilterInput = ({ className, ...props }) => (
  <input
    type="text"
    className={cn('w-full bg-white text-gray-900 border border-gray-300 rounded px-3 py-2', className)}
    {...props}
  />
);

export default FilterInput;
