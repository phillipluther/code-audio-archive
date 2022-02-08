import * as React from 'react';
import { Link } from 'gatsby';
import classnames from 'classnames';

const commonClasses =
  'block px-6 py-2 leading-10 outline-offset-[-4px] hover:underline hover:decoration-solid decoration-2';

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
    <ul className="flex flex-wrap font-display text-stone-50">
      {showHome && (
        <li>
          <Link to="/" className={classnames(commonClasses, 'bg-stone-800', 'hover:bg-stone-900')}>
            Home
          </Link>
        </li>
      )}
      <li>
        <Link to="/music" className={classnames(commonClasses, 'bg-rose-700', 'hover:bg-rose-900')}>
          Blog
        </Link>
      </li>
      <li>
        <Link to="/about" className={classnames(commonClasses, 'bg-lime-700', 'hover:bg-lime-900')}>
          About
        </Link>
      </li>
      <li>
        <Link to="/contact" className={classnames(commonClasses, 'bg-sky-700', 'hover:bg-sky-900')}>
          Contact
        </Link>
      </li>
    </ul>
  </nav>
);

export default PrimaryNav;
