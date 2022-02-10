import * as React from 'react';
import { Link, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Bio from '../components/bio';
import Layout from '../components/layout';
import Seo from '../components/seo';

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark;
  const { previous, next } = data;

  return (
    <Layout location={location}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />

      <article itemScope itemType="http://schema.org/Article">
        <header>
          <h1
            itemProp="headline"
            className="font-display text-4xl xs:text-5xl sm:text-6xl md:text-7xl !leading-tight mb-5 md:mb-6"
          >
            {post.frontmatter.title}
          </h1>
          <p className="mb-5">Published {post.frontmatter.date}</p>
          <p className="mb-5 prose-lg xs:prose-xl text-stone-600 italic">
            {post.frontmatter.description || post.excerpt}
          </p>

          {post.frontmatter.cover && (
            <GatsbyImage
              image={getImage(post.frontmatter.cover)}
              alt=""
              aria-hidden
              className="aspect-video -z-10 -ml-6 -mr-6 mb-4 sm:mb-5"
            />
          )}
        </header>

        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
          className="prose-lg prose-ol:list-decimal prose-ul:list-disc prose-blockquote:text-xl prose-blockquote:italic prose-blockquote:leading-8 prose-blockquote:border-l-8 prose-headings:font-display"
        />

        <footer>
          <h2 className="sr-only">Footer and Supplemental Content</h2>
          <Bio />
        </footer>
      </article>

      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($id: String!, $previousPostId: String, $nextPostId: String) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        cover {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;
