import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import PrimaryNav from './primary-nav';
import Social from './social';
import Container from './container';

import Logo from '../../images/principled-engineer-logo.inline.svg';

const Layout = ({
  location,
  children,
}: {
  location: {
    pathname?: string;
  };
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
    <div className="max-w-screen-md mx-auto" data-is-root-path={isRootPath}>
      <header className="flex flex-wrap">
        <TitleTag>
          <Link
            to="/"
            className="group block px-6 py-2 bg-slate-800 text-slate-50 outline-offset-[-4px] hover:bg-amber-100"
          >
            <span className="sr-only">{site.siteMetadata.title}</span>
            <Logo className="w-auto h-16 fill-amber-50 group-hover:fill-slate-800" aria-hidden />
          </Link>
        </TitleTag>

        <PrimaryNav showHome={false} />
      </header>

      <Container as="main">{children}</Container>

      <footer>
        <h2 className="sr-only">Page Footer: Supplemental Navigation and Information</h2>

        <section className="flex flex-wrap justify-between">
          <PrimaryNav title="Footer Navigation" />
          <Social title="On Social Media" />
        </section>

        <Container className="text-sm text-slate-600 mt-4">
          <h3 className="sr-only">Copyright and Disclaimers</h3>

          <p className="mb-4">
            All {site.siteMetadata.title} content is Copyright &copy; {new Date().getFullYear()} by{' '}
            {site.siteMetadata.author.name} unless otherwise specified.
          </p>
          <p>
            The opinions expressed on {site.siteMetadata.title} belong to me,{' '}
            {site.siteMetadata.author.name}, and do not necessarily reflect the views or opinions of
            any associated organizations or corporate entities.
          </p>
        </Container>
      </footer>
    </div>
  );
};

export default Layout;
