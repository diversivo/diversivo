import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

// import { Link } from 'gatsby';

// import Fluid from '../components/home/our-work/fluid';

const Portfolio = () => (
  <Layout>
    <SEO title="Diversivo - Trabajos" />
    <div className="container">
      <div className="content">
        <h1>Somos ninjas en la oscuridad</h1>
        <p>Trabajamos para agencias que necesitan ayuda en desarrollar sus ideas digitales.</p>
        <p>Es por eso que nuestros proyectos tienen algunos niveles de privacidad que no nos permite publicarlos directamente en la web, si deseas ver todo nuetro trabajo, puedes pedirnos acceso a nuestro portafolio online.</p>
      </div>
    </div>
  </Layout>
);

export default Portfolio;
