import { graphql } from 'gatsby';
import * as React from 'react';

import Layout from '../components/layout';
import Seo from '../components/seo';
import PageTitle from '../components/page-title';

const ContactPage = ({ data, location }) => {
  const title = 'Contact Info';
  const description =
    'Comments, questions, or feedback for the blog? Ideas for new posts? Email and Twitter are the best places to contact me.';

  const contactLinks = data.site.siteMetadata.social.reduce((links, { link, service }) => {
    if (['Twitter', 'Email'].includes(service)) {
      links[service] = link;
    }

    return links;
  }, {});

  return (
    <Layout location={location}>
      <Seo title={title} description={description} />

      <PageTitle>{title}</PageTitle>
      <p className="mb-5 leading-7">
        Questions, comments, ideas, or feedback for the blog? Found something wonky with the site
        itself? Hate the fonts?
      </p>
      <p className="mb-5 leading-7">Let me (Phil) know!</p>
      <p className="mb-5 leading-7">
        <a href={contactLinks.Email}>Email</a> is the best way to get in touch because I'm
        old-fashioned like that. I'm infrequently active on{' '}
        <a href={contactLinks.Twitter}>Twitter</a>, as well, so a well-timed and thoughtful
        at-mention also works.
      </p>
      <p className="mb-5 leading-7">
        If you do email me, rest assured your email will never ever be used for anything other than
        writing you back.
      </p>
    </Layout>
  );
};

export default ContactPage;

export const query = graphql`
  query {
    site {
      siteMetadata {
        social {
          link
          service
        }
      }
    }
  }
`;
