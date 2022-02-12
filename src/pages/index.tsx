import * as React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Seo from '../components/seo';
import PageTitle from '../components/page-title';
import SectionTitle from '../components/section-title';
import PostList from '../components/posts';

const BlogIndex = ({ data, location }) => {
  const { title, description } = data.site.siteMetadata;

  return (
    <Layout location={location}>
      <Seo title="Home" description={description} />

      <PageTitle as="h2">
        {title} is {description.toLowerCase()}.
      </PageTitle>

      <section>
        <SectionTitle as="h3">Recent Blog Posts</SectionTitle>
        <PostList posts={data.allMarkdownRemark.nodes} headingLevel="h4" />
      </section>
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          cover {
            childImageSharp {
              gatsbyImageData
            }
          }
          date(formatString: "MMMM, DD YYYY")
          description
          title
        }
      }
    }
  }
`;
