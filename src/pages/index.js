import React from 'react';
// import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Slider from '../components/home/slider';
import OurWork from '../components/home/our-work';
import Stack from '../components/commons/stack';
import Contact from '../components/commons/contact';

const IndexPage = () => (
  <Layout>
    <SEO title="Diversivo - Inicio" />
    <Slider />
    <OurWork />
    <Stack />
    <Contact />
  </Layout>
);

export default IndexPage;
