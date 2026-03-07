import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '../../lib/cn';

type FilterLabelProps = ComponentPropsWithoutRef<'label'>;

const FilterLabel = ({ className, children, ...props }: FilterLabelProps) => (
  <label
    className={cn('block text-white text-sm font-medium mb-1', className)}
    {...props}
  >
    {children}
  </label>
);

export default FilterLabel;
