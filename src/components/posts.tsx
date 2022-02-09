import * as React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import classnames from 'classnames';

const Posts = ({
  posts = [],
  className,
  headingLevel: HeadingTag = 'h3',
  ...props
}: {
  className?: string;
  headingLevel?: React.ElementType;
  posts?: {
    excerpt?: string;
    fields?: {
      slug?: string;
    };
    frontmatter?: {
      cover?: any;
      date: string;
      description?: string;
      title: string;
    };
  }[];
}) => (
  <ol className="" {...props}>
    {posts.map((post) => {
      const title = post.frontmatter.title || post.fields.slug;

      return (
        <li key={post.fields.slug}>
          <article className="pb-12" itemScope itemType="http://schema.org/Article">
            <header className="flex flex-wrap">
              <HeadingTag className="font-display text-2xl xs:text-3xl mb-4 sm:mb-5 w-full order-2 xs:-mt-16 xs:bg-white xs:-ml-6 xs:px-6 xs:pt-6">
                <Link to={post.fields.slug} itemProp="url">
                  <span itemProp="headline">{title}</span>
                </Link>
              </HeadingTag>
              <time className="block text-sm mb-4 sm:mb-5 w-full order-3 xs:pr-6">
                Published {post.frontmatter.date}
              </time>

              {post.frontmatter.cover && (
                <Link className="order-1" to={post.fields.slug} tabIndex={-1}>
                  <GatsbyImage
                    tabIndex={-1}
                    image={getImage(post.frontmatter.cover)}
                    alt=""
                    aria-hidden
                    className="aspect-video -z-10 -ml-6 -mr-6 mb-4 sm:mb-5"
                  />
                </Link>
              )}
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: post.frontmatter.description || post.excerpt,
                }}
                itemProp="description"
                className="leading-7 xs:pr-6"
              />
            </section>
          </article>
        </li>
      );
    })}
  </ol>
);

export default Posts;
