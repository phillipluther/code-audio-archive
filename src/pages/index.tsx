import * as React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Seo from '../components/seo';

const BlogIndex = ({ data, location }) => {
  const title = `Home | ${data.site.siteMetadata.title}`;

  return (
    <Layout location={location}>
      <Seo title={title} />

      <h1>{title}</h1>
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
