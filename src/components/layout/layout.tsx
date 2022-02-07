import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import PrimaryNav from './primary-nav';

import Logo from '../../images/code-audio-logo-inverse.inline.svg';

const Layout = ({
  location,
  title,
  children,
}: {
  location: {
    pathname?: string;
  };
  title: string;
  children: React.ReactNode;
}) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;
  const TitleTag = isRootPath ? 'h1' : 'p';

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            author {
              name
            }
          }
        }
      }
    `
  );

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header flex flex-wrap">
        <TitleTag>
          <Link to="/" className="block px-4 py-2 bg-stone-700 text-stone-50 outline-offset-[-4px]">
            <span className="sr-only">{title}</span>
            <Logo className="w-auto h-10" aria-hidden />
          </Link>
        </TitleTag>

        <PrimaryNav showHome={false} />
      </header>

      <main>{children}</main>

      <footer>
        <h2 className="sr-only">Page Footer: Supplemental Navigation and Information</h2>

        <PrimaryNav title="Footer Navigation" />

        <section>
          <h3 className="sr-only">Copyright and Disclaimers</h3>

          <p>
            All {site.siteMetadata.title} content is Copyright &copy; {new Date().getFullYear()} by{' '}
            {site.siteMetadata.author.name} unless otherwise specified.
          </p>
          <p>
            The opinions expressed on {site.siteMetadata.title} belong to me,{' '}
            {site.siteMetadata.author.name}, and do not necessarily reflect the views or opinions of
            any associated organizations or corporate entities.
          </p>
        </section>
      </footer>
    </div>
  );
};

export default Layout;
