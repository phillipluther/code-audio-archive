import * as React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import PageTitle from '../components/page-title';
import SectionTitle from '../components/section-title';
import Seo from '../components/seo';

const AboutPage = ({ data, location }) => {
  const title = "Topics Tailored to Today's Troubadour Engineer";
  const description =
    'From the fundamentals of music theory to WebGL applications to programmatic audio, this blog covers music, code, and music and code.';

  const metadata = data.site.siteMetadata;

  return (
    <Layout location={location}>
      <Seo title={title} description={description} />

      <PageTitle>{title}</PageTitle>
      <p className="leading-7 mb-5">
        I love that headline. I'm pretty sure it's a lousy headline as far as headline optimization
        goes, but it's got this highfalutin sensibility that resonates with the blog's target
        audience.
      </p>
      <p className="leading-7 mb-5">
        That's my theory, at least. Please{' '}
        <a href={`mailto:${metadata.author.email}`}>lemme know</a> if it heinously flops.
      </p>
      <p className="leading-7 mb-5">Also, who is "me," you ask?</p>

      <SectionTitle>About the Author</SectionTitle>
      <p className="leading-7 mb-5">
        My name is {metadata.author.name}. I go by Phil. I'm the creator of and sole contributor to{' '}
        {metadata.title}. Any references to "I" or "me" on this site refer to me,{' '}
        {metadata.author.name}. Who goes by Phil. And who is the creator of and sole contributor to{' '}
        {metadata.title}.
      </p>
      <p className="leading-7 mb-5">
        Semi-related, bios are hard. Each post sports an "About the Author" blurb, though. Those'll
        have to do for now and I'll commit to building out this page as the blog grows.
      </p>
    </Layout>
  );
};

export default AboutPage;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        author {
          name
          email
        }
      }
    }
  }
`;
