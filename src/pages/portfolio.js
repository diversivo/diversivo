import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Clients from '../components/commons/clients';
import Contact from '../components/commons/contact';


// import { Link } from 'gatsby';

// import Fluid from '../components/home/our-work/fluid';

const Portfolio = () => (
  <Layout>
    <SEO title="Diversivo - Trabajos" />
    <div className="container">
      <pre className="txt-center vertical-padding color-gray">Algunas marcas y clientes con los que hemos colaborado</pre>
      <Clients />
      <Contact />
    </div>
  </Layout>
);

export default Portfolio;
