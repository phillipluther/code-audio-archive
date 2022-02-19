import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { FaTwitter, FaYoutube, FaGithub, FaEnvelope } from 'react-icons/fa';

const iconMap = {
  Twitter: FaTwitter,
  YouTube: FaYoutube,
  GitHub: FaGithub,
  Email: FaEnvelope,
};

const Social = ({ title, ...props }: { title: string }) => {
  const {
    site: {
      siteMetadata: { social },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          social {
            service
            handle
            link
          }
        }
      }
    }
  `);

  return (
    <ul className="flex flex-wrap divide-x" aria-label={title} {...props}>
      {social.map(({ service, handle, link }) => {
        const Icon = iconMap[service] || null;

        return (
          <li key={service}>
            <a
              href={link}
              className="block px-6 py-2 text-2xl outline-offset-[-4px] text-slate-800 bg-slate-100 hover:bg-slate-800 hover:text-slate-100"
            >
              {Icon && <Icon className="h-10" />}
              <span className="sr-only">{`${handle} via ${service}`}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Social;
