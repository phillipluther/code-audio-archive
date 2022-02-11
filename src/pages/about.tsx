import * as React from 'react';

import Layout from '../components/layout';
import PageTitle from '../components/page-title';
import SectionTitle from '../components/section-title';
import Seo from '../components/seo';

const AboutPage = ({ location }) => {
  const title = "Topics Tailored to Today's Troubadour Engineer";
  const description =
    'From the fundamentals of music theory to WebGL applications to programmatic audio, this blog covers music, code, and music and code.';

  return (
    <Layout location={location}>
      <Seo title={title} description={description} />

      <PageTitle>{title}</PageTitle>
      <p className="leading-7 mb-5">{description}</p>

      <SectionTitle>About the Blog</SectionTitle>
      <p className="leading-7 mb-5">
        Have you ever noticed how many software engineers are also musicians? This blog's a member
        of that union: topics dive into frontend engineering, music, and programmatic audio. "How
        stuff works" is of particular interest: the nuts and bolts of music theory, what new hotness
        shipped with what browser, what compressors actually do to sound, and other such
        curiosities.
      </p>
      <p className="leading-7 mb-5">
        That's not to say every post bundles development <em>and</em> audio, but articles
        specifically diving into one will contain threads of the other. If you're a musician who
        codes or a coder who musics, you should find this stuff interesting.
      </p>
      <p className="leading-7 mb-5">So is the goal, at least.</p>

      <SectionTitle>About the Author</SectionTitle>
      <p className="leading-7 mb-5">
        Bios are hard. As the blog chugs along I'll wrangle the pithy and earnest words to tell my
        story. In the meantime, there's an author summary attached to every post; that'll have to do
        for now.
      </p>
    </Layout>
  );
};

export default AboutPage;
