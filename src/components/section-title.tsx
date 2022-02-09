import * as React from 'react';

const SectionTitle = ({
  as: Tag = 'h2',
  children,
}: {
  as?: React.ElementType;
  children: React.ReactNode;
}) => (
  <Tag className="relative text-base text-stone-500 font-display pl-6 -ml-6 mb-4 after:block after:w-4 after:bg-stone-400 after:h-full after:absolute after:top-0 after:left-0">
    {children}
  </Tag>
);

export default SectionTitle;
