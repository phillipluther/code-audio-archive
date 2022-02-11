import * as React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import classnames from 'classnames';

const blockClasses = 'xs:bg-white xs:-ml-6 xs:px-6 max-w-lg';

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
              <HeadingTag
                className={classnames(
                  'font-display text-2xl xs:text-3xl !leading-tight mb-4 sm:mb-5 w-full order-2 xs:-mt-24 xs:pt-6',
                  blockClasses
                )}
              >
                <Link to={post.fields.slug} itemProp="url">
                  <span itemProp="headline">{title}</span>
                </Link>
              </HeadingTag>
              <time
                className={classnames(
                  'block text-sm mb-4 sm:mb-5 w-full order-3 xs:pr-6',
                  blockClasses
                )}
              >
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
                className={classnames('leading-7 xs:pr-6 mb-4 sm:mb-5', blockClasses)}
              />
            </section>

            <footer>
              <Link
                to={post.fields.slug}
                className="font-display text-emerald-600 invisible hover:text-emerald-800 sm:visible"
              >
                Read More &raquo;
              </Link>
            </footer>
          </article>
        </li>
      );
    })}
  </ol>
);

export default Posts;
