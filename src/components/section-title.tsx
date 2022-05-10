import * as React from 'react';
import classnames from 'classnames';

const SectionTitle = ({
  as: Tag = 'h2',
  children,
  flush = false,
}: {
  as?: React.ElementType;
  children: React.ReactNode;
  flush?: boolean;
}) => (
  <Tag
    className={classnames(
      'relative',
      'text-base',
      'text-stone-700',
      'font-display',
      'pl-6',
      '-ml-6',
      'mb-6',
      'after:block',
      'after:w-4',
      'after:bg-stone-700',
      'after:h-full',
      'after:absolute',
      'after:top-0',
      'after:left-0',
      {
        'mt-6': flush === false,
      }
    )}
  >
    {children}
  </Tag>
);

export default SectionTitle;
