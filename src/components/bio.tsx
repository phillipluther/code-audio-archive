import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          title
          author
          social {
            service
            handle
            link
          }
        }
      }
    }
  `);

  const author = data.site.siteMetadata.author;

  return (
    <section className="bg-gray-100 my-6 p-6 prose">
      <h3 className="font-display mb-4">About the Author</h3>
      <StaticImage
        className="max-w-sm float-left mr-4 sm:mr-6 mb-4"
        layout="constrained"
        formats={['auto', 'webp', 'avif']}
        src="../images/portrait-avatar.png"
        width={120}
        quality={70}
        alt={`${author}, the sole contributor to posts on ${data.site.siteMetadata?.title}`}
      />

      <p>My name is Phillip Luther. I go by Phil.</p>
      <p>
        I'm a <a href="#life_long_clarification">life-long</a>
        <sup>*</sup> software engineer and classically trained musician. I'm also the sole author
        behind posts on this blog, exploring music, code, and music and code.
      </p>
      <p>
        Current areas of interest include the web audio API, blockchain technology, and YouTube
        guitar channels. Ask me about 'em!
      </p>
    </section>
  );
};

export default Bio;
