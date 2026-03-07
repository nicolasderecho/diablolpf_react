import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '../../lib/cn';

type PrimaryButtonProps = ComponentPropsWithoutRef<'button'>;

const PrimaryButton = ({ className, children, ...props }: PrimaryButtonProps) => (
  <button
    className={cn('bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded', className)}
    {...props}
  >
    {children}
  </button>
);

export default PrimaryButton;
