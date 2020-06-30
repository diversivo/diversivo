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
      <div className="content">
        <h1>Somos ninjas en la oscuridad</h1>
        <p>Trabajamos para agencias que necesitan ayuda en desarrollar sus ideas digitales.</p>
        <p>Es por eso que nuestros proyectos tienen algunos niveles de privacidad que no nos permite publicarlos directamente en la web, si deseas ver todo nuestro trabajo, agendemos una reunión.</p>
      </div>
      <pre className="txt-center vertical-padding color-gray">Algunas marcas y clientes con los que hemos colaborado</pre>
      <Clients />
      <Contact />
    </div>
  </Layout>
);

export default Portfolio;
