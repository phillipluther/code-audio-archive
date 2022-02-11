import * as React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Seo from '../components/seo';
import PageTitle from '../components/page-title';
import SectionTitle from '../components/section-title';
import Posts from '../components/posts';

const BlogIndex = ({ data, location }) => {
  const { title, description } = data.site.siteMetadata;

  return (
    <Layout location={location}>
      <Seo title="Home" description={description} />

      <PageTitle as="h2">
        {title} is {description.toLowerCase()}.
      </PageTitle>

      <SectionTitle as="h3">Recent Posts</SectionTitle>
    </Layout>
  );
};

export default BlogIndex;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
