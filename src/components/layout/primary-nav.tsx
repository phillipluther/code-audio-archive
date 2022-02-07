import * as React from 'react';
import { Link } from 'gatsby';
import classnames from 'classnames';

const commonClasses = 'block px-4 py-2 leading-10 outline-offset-[-4px]';

const PrimaryNav = ({
  className,
  showHome = true,
  title = 'Primary Navigation',
  ...props
}: {
  className?: string;
  showHome?: boolean;
  title?: string;
}) => (
  <nav aria-label={title} className={className} {...props}>
    <ul className="flex font-display text-stone-50">
      {showHome && (
        <li>
          <Link to="/" className={classnames(commonClasses, 'bg-stone-700')}>
            Home
          </Link>
        </li>
      )}
      <li>
        <Link to="/blog" className={classnames(commonClasses, 'bg-stone-700')}>
          Blog
        </Link>
      </li>
      <li>
        <Link to="/about" className={classnames(commonClasses, 'bg-stone-700')}>
          About
        </Link>
      </li>
      <li>
        <Link to="/contact" className={classnames(commonClasses, 'bg-stone-700')}>
          Contact
        </Link>
      </li>
    </ul>
  </nav>
);

export default PrimaryNav;
