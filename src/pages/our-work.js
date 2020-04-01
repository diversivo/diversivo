
import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Stack from '../components/commons/stack';
import Contact from '../components/commons/contact';
import Slider from '../components/our-work/slider';

import MainImage from '../assets/images/somos-head.png';

const OurWork = () => (
  <Layout>
    <SEO title="Diversivo - Que Hacemos" />
    <div className="container">
      <Slider
        title="Conectamos personas con marcas y organizaciones."
        img={MainImage}
        alt="test"
      />
    </div>
    <Stack />
    <Contact />
  </Layout>
);

export default OurWork;
