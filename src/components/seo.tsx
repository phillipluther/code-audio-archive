import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const Seo = ({
  description,
  lang = 'en',
  meta = [],
  title,
  socialImage,
}: {
  description?: string;
  lang?: string;
  meta?: (
    | {
        name: string;
        content: any;
        property?: undefined;
      }
    | {
        property: string;
        content: any;
        name?: undefined;
      }
  )[];
  title?: string;
  socialImage?: string;
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            social {
              service
              handle
            }
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata.title;
  const { handle: twitterHandle } = site.siteMetadata.social.filter(
    ({ service }) => service === 'Twitter'
  );

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:image',
          content: socialImage || 'https://code.audio/images/code-audio-social-card.png',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          content: twitterHandle,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
      ].concat(meta)}
    />
  );
};

export default Seo;
