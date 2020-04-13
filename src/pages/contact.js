
import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import LayoutOneColTwoCol from '../components/commons/layout-onecol-twocol';

import MainImage from '../assets/images/contact-main-art.png';
import ContactForm from '../components/contact/contact-form';

const Contact = () => (
  <Layout>
    <SEO title="Diversivo - Somos" />
    <div className="container">
      <LayoutOneColTwoCol
        img={MainImage}
        alt="Contacto - Arte por Diversivo"
        pre="Hablemos"
        title="Existen muchas maneras de potenciar tu marca en el mundo digital."
        subtitle="Si ya tienes tus objetivos claros, te ayudamos a lograrlos. Si necesitas desarrollar una idea, lo hacemos por ti. Si quieres mejorar tu marca y presencia pero no sabes cómo, te ayudamos a crear un plan. No importa si necesitas un gran equipo de profesionales o solo un poquito de ayuda. Queremos conocerte."
      />
      <div className="center">
        <ContactForm />
      </div>
    </div>
  </Layout>
);

export default Contact;
