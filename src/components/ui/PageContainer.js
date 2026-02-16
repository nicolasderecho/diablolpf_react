import React from 'react';
import { cn } from '../../lib/cn';

const PageContainer = ({ className, children, ...props }) => (
  <div className={cn('pt-5', className)} {...props}>
    {children}
  </div>
);

export default PageContainer;
