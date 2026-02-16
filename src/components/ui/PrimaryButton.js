import React from 'react';
import { cn } from '../../lib/cn';

const PrimaryButton = ({ className, children, ...props }) => (
  <button
    className={cn('bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded', className)}
    {...props}
  >
    {children}
  </button>
);

export default PrimaryButton;
