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
        I love that headline. I'm not sure it's a <em>great</em> headline but it's got a sensibility
        that'll resonate with this blog's target audience.
      </p>
      <p className="leading-7 mb-5">That's my guess, at least.</p>
      <p className="leading-7 mb-5">
        If it heinously flops I invite you to{' '}
        <a href={`mailto:${metadata.author.email}`}>let me know</a>. Who is "me?"
      </p>

      <SectionTitle>About the Author</SectionTitle>
      <p className="leading-7 mb-5">
        My name is {metadata.author.name}. I go by Phil and I'm the sole contributor to{' '}
        {metadata.title}. Any references to "I" or "me" on this site refer to me,{' '}
        {metadata.author.name}, who goes by Phil. And who is the sole contributor to{' '}
        {metadata.title}.
      </p>
      <p className="leading-7 mb-5">
        Beyond that, bios are hard. Those "About the Author" blurbs appearing on all blog posts will
        have to do for now, though I'll commit to building out this page as the blog grows.
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
