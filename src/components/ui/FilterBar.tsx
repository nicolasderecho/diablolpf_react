import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '../../lib/cn';

type FilterBarProps = ComponentPropsWithoutRef<'div'>;

const FilterBar = ({ className, children, ...props }: FilterBarProps) => (
  <div
    className={cn('bg-green-600 text-white border border-white m-2 md:m-4 p-4', className)}
    {...props}
  >
    {children}
  </div>
);

export default FilterBar;
