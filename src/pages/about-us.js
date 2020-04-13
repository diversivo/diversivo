
import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Contact from '../components/commons/contact';
import Value from '../components/about-us/values';
import LayoutOneColTwoCol from '../components/commons/layout-onecol-twocol';

import MainImage from '../assets/images/we-are-main-art.png';

const AboutUs = () => (
  <Layout>
    <SEO title="Diversivo - Somos" />
    <div className="container">
      <LayoutOneColTwoCol
        img={MainImage}
        alt="Quienes Somos - Arte por Diversivo"
        pre="¿Buscas un Partner Digital?"
        title="Somos jóvenes creativos con experiencia en el mundo digital."
        subtitle="Colaborativos por naturaleza, con ganas de crear productos y servicios digitales significativos. Nos gustan los desafíos, el diseño y la tecnología. con hambre de innovar y pasión por entregar soluciones definitivas."
      />
      <div className="content">
        <h5 className="headline--h5">VALORES</h5>
        <Value
          name="Integridad"
          number="01"
          description="Hablar sin miedo y con honestidad."
        />
        <Value
          name="Respeto"
          number="02"
          description="A tus compañeros, clientes y a ti mismo."
        />
        <Value
          name="Aprendizaje"
          number="03"
          description="Aprender nuevas tecnologías y metodologías para mejorar día a día."
        />
        <Value
          name="Diversión"
          number="04"
          description="Disfruta el viaje, se creativo."
        />
      </div>
    </div>
    <Contact />
  </Layout>
);

export default AboutUs;
