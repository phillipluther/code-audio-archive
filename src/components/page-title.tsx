import * as React from 'react';
import classnames from 'classnames';

const PageTitle = ({
  as: Tag = 'h1',
  className,
  children,
  ...props
}: {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  children: React.ReactNode;
  [key: string]: any;
}) => (
  <Tag
    className={classnames(
      'font-display',
      'text-4xl',
      'xs:text-5xl',
      'sm:text-6xl',
      'md:text-7xl',
      '!leading-tight',
      'mb-5',
      'md:mb-6',
      className
    )}
    {...props}
  >
    {children}
  </Tag>
);

export default PageTitle;
