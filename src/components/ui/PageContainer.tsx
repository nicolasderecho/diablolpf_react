import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '../../lib/cn';

type PageContainerProps = ComponentPropsWithoutRef<'div'>;

const PageContainer = ({ className, children, ...props }: PageContainerProps) => (
  <div className={cn('pt-5', className)} {...props}>
    {children}
  </div>
);

export default PageContainer;
