import * as React from 'react';
import classnames from 'classnames';

const Container = ({
  as: Tag = 'section',
  className,
  children,
  ...props
}: {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}) => (
  <Tag className={classnames('p-6', className)} {...props}>
    {children}
  </Tag>
);

export default Container;
