import * as React from 'react';
import { Link } from 'gatsby';

import Logo from '../images/code-audio-logo-inverse.inline.svg';

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;
  const TitleTag = isRootPath ? 'h1' : 'p';

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header flex flex-wrap">
        <TitleTag>
          <Link to="/" className="block px-4 py-2 bg-stone-700 text-stone-50 outline-offset-[-4px]">
            <span className="sr-only">{title}</span>
            <Logo className="w-auto h-10" aria-hidden />
          </Link>
        </TitleTag>

        <nav>
          <ul className="flex font-display text-stone-50">
            <li>
              <Link
                to="/blog"
                className="block px-4 py-2 leading-10 outline-offset-[-4px] bg-stone-700"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block px-4 py-2 leading-10 outline-offset-[-4px] bg-stone-700"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block px-4 py-2 leading-10 outline-offset-[-4px] bg-stone-700"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  );
};

export default Layout;
