import * as React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Seo from '../components/seo';
import PageTitle from '../components/page-title';

const NotFoundPage = ({ data, location }) => {
  return (
    <Layout location={location}>
      <Seo title="Page Not Found" />
      <PageTitle>Page Not Found</PageTitle>
      <p className="mb-5 leading-7">
        Alas, the page you asked for doesn't exist. At least, it doesn't exist <em>here</em>.
        Double-check the link that got you here or use the global nav to get back on track.
      </p>
      <p className="mb-5 leading-7">
        Feel like you reached this page in error? Please <Link to="/contact">let me know</Link>!
      </p>
    </Layout>
  );
};

export default NotFoundPage;
