import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          title
          author {
            name
          }
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
        alt={`${author.name}, the sole contributor to posts on ${data.site.siteMetadata?.title}`}
      />

      <p>My name is Phillip Luther. I go by Phil.</p>
      <p>
        I'm a life-long<sup>*</sup> software engineer and classically trained musician. I'm also the
        creator of and sole contributor to {data.site.siteMetadata?.title}, this very blog.
      </p>
      <p>
        Blog-relevant areas of current interest include the web audio API, blockchain technology in
        non-crypto/-NFT spaces, and YouTube guitar channels.
      </p>
      <p>
        Blog-irrelevant areas of current interest include sci-fi/fantasy across most mediums,
        micro-optimizing my living space, and trying to reconcile my love of strong drink with a
        desire to live a yogic lifestyle.
      </p>
      <p className="text-sm text-stone-700 italic" id="life_long_clarification">
        <span>*</span>{' '}
        <span>
          I'm just over 40. Accounting for childhood and teenage buffoonery I'll translate "life
          long" to 20'ish years. Throwing that out for clarity.
        </span>
      </p>
    </section>
  );
};

export default Bio;
