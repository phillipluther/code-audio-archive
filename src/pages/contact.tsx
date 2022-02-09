import * as React from 'react';

import Layout from '../components/layout';
import Seo from '../components/seo';

const BlogIndex = ({ location }) => {
  const title = 'Contact Info';

  return (
    <Layout location={location}>
      <Seo title={title} />

      <h1>{title}</h1>
    </Layout>
  );
};

export default BlogIndex;
