import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '../../lib/cn';

type FilterInputProps = ComponentPropsWithoutRef<'input'>;

const FilterInput = ({ className, ...props }: FilterInputProps) => (
  <input
    type="text"
    className={cn('w-full bg-white text-gray-900 border border-gray-300 rounded px-3 py-2', className)}
    {...props}
  />
);

export default FilterInput;
