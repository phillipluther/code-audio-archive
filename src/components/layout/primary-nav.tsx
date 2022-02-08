import * as React from 'react';
import { Link } from 'gatsby';
import classnames from 'classnames';

const commonClasses =
  'block px-6 py-2 leading-10 outline-offset-[-4px] hover:underline hover:decoration-solid decoration-2';

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link
    to={to}
    className="block px-6 py-2 leading-10 outline-offset-[-4px] hover:underline hover:decoration-solid decoration-2 bg-stone-800 hover:bg-stone-100 hover:text-stone-800"
  >
    {children}
  </Link>
);

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
          <NavLink to="/">Home</NavLink>
        </li>
      )}
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </ul>
  </nav>
);

export default PrimaryNav;
